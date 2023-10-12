
import { useState } from "react";
import Result from "../Result";
import { Clock } from "../Clock";
import { Legend, Footer, Button, Fieldset, InputAmount, Content, Div, Loading, Failure, Select } from "./styled";
import { useRatesData } from "./useRatesData";

const Form = () => {
  const [result, setResult] = useState(0);
  const [amount, setAmount] = useState("");
  const [selectedOption, setSelectedOption] = useState("EUR");
  const [resetResult, setResetResult] = useState(true);
  const ratesData = useRatesData();


  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult();
  };

  const handleAmountChange = (newAmount) => {
    setAmount(newAmount);
    setResetResult(false);
  };

  const handleAmountFocus = () => {
    if (amount === 0) {
      setAmount("");
    };
  };

  const handleCurrencyChange = (newCurrency) => {
    setSelectedOption(newCurrency);
    setAmount(0);
    setResetResult(true);
    setResult(0);
  };


  const calculateResult = (currency, amount) => {

    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  return (
    <form onSubmit={onFormSubmit} >
      {ratesData.state === "loading"
        ? (
          <Loading>
            Sekunda
          </Loading>
        )
        : (
          ratesData.state === "error" ? (
            <Failure>
              Cos poszlo nie tak
            </Failure>
          ) : (
            <>
              <Fieldset>
                <Legend>
                  Kalkulator walutowy
                </Legend>
                <Clock />
                <label>
                  <Content>
                    Wybierz walutę którą chcesz przewalutować:
                  </Content>
                  <Select
                    value={currency}
                    onChange={({ target }) => handleCurrencyChange(target.value)}
                  >
                    {!!ratesData.rates && Object.keys(ratesData.rates).map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </Select>
                  <Div>
                    <Content>
                      Wpisz kwotę do przewalutowania w zł
                    </Content>
                    <InputAmount
                      value={amount}
                      onChange={(event) => handleAmountChange(event.target.value)}
                      onFocus={handleAmountFocus}
                      name="amount"
                      required
                      placeholder="0 zł"
                      type="number"
                      step="0.01"
                      min="1"
                      max="100000"
                    />
                    <Button
                      onClick={calculateResult}
                    >
                      Przelicz!
                    </Button>
                  </Div>
                </label>
                <Result
                  result={result}
                  selectedCurrency={selectedOption}
                />
                <Footer>
                  Kursy walut z dnia 23.07.23
                </Footer>
              </Fieldset>
            </>
          )
        )
      }
    </form>
  );
};

export default Form;