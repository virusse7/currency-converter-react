import CurrencySelect from "../CurrencySelect";
import { useState } from "react";
import Result from "../Result";
import { Clock } from "../Clock";
import { Legend, Footer, Button, Fieldset, InputAmount, Content, Div } from "./styled";

const Form = () => {
  const [result, setResult] = useState(0);
  const [amount, setAmount] = useState("");
  const [selectedOption, setSelectedOption] = useState("EUR");
  const [resetResult, setResetResult] = useState(true);

  const onFormSubmit = (event) => {
    event.preventDefault();
    convertCurrency();
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

  const convertCurrency = () => {
    const currencies = [
      { label: "EUR", value: 0.23, name: "Euro" },
      { label: "USD", value: 0.25, name: "Dolar Amerykański" },
      { label: "ARS", value: 66.67, name: "Peso Argentyńskie" },
    ];

    const selectedCurrencyValue = currencies.find((currency) => currency.label === selectedOption)?.value;

    const convertedResult = (amount * selectedCurrencyValue);

    setResult(convertedResult.toFixed(2));
  };



  return (
    <form onSubmit={onFormSubmit} >
      <Fieldset>
        <Legend>
          Kalkulator walutowy
        </Legend>
        <Clock />
        <label>
          <Content>
            Wybierz walutę którą chcesz przewalutować:
          </Content>
          <CurrencySelect
            onCurrencyChange={handleCurrencyChange}
            setResult={setResult}
          />
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
              onClick={convertCurrency}
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
    </form>
  );
};

export default Form;