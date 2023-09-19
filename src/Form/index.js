import "./style.css";
import Legend from "../Legend";
import Label from "../Label";
import Footer from "../Footer";
import Button from "../Button";
import CurrencySelect from "../CurrencySelect";
import { useState } from "react";
import Result from "../Result";

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

    const convertedResult = (parseFloat(amount) / selectedCurrencyValue).toFixed(2);

    setResult(convertedResult);
  };



  return (
    <form className="form" onSubmit={onFormSubmit} >
      <fieldset className="fieldset">
        <Legend legend="Kalkulator walutowy" />
        <Label
          className="label"
          body={<CurrencySelect onCurrencyChange={handleCurrencyChange} setResult={setResult} />}
        />
        <div className="label__container">
          <input
            className="label__amount"
            value={amount}
            onChange={(event) => handleAmountChange(event.target.value)}
            onFocus={handleAmountFocus}
            name="amount"
            required
            placeholder="0 zł"
            type="number"
            step="0.01"
            min="0.01"
            max="100000"
          />
          <Button convertCurrency={convertCurrency} text="Przelicz!" />
        </div>
        <Result result={result} selectedCurrency={selectedOption} />
        <Footer body="Kursy walut z dnia 23.07.23" />
      </fieldset>
    </form>
  );
};

export default Form;