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


  const currencies = [
    { label: "EUR", value: 0.23, name: "Euro" },
    { label: "USD", value: 0.25, name: "Dolar Amerykański" },
    { label: "ARS", value: 66.67, name: "Peso Argentyńskie" },
  ];

  const onFormSubmit = (event) => {
    event.preventDefault();
    convertCurrency();
  };

  const handleAmountChange = (newAmount) => {
    setAmount(newAmount);
  };
  const handleCurrencyChange = (newCurrency) => {
    setSelectedOption(newCurrency);
  };

  const convertCurrency = (convertedResult) => {
    const selectedCurrencyValue = currencies.find((currency) => currency.label === selectedOption)?.value;
    if (selectedCurrencyValue !== undefined) {
      const convertedResult = (parseFloat(amount) / selectedCurrencyValue).toFixed(2);
      setResult(convertedResult);
    } else {
      setResult("Wybierz poprawną walutę"); // Możesz dodać obsługę błędu, gdy wybrana waluta jest nieznana
    };
    return convertedResult;
  };



  return (
    <form currencies={currencies} className="form" onSubmit={onFormSubmit} >
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
        <Result result={result} />
        <Footer body="Kursy walut z dnia 23.07.23" />
      </fieldset>
    </form>
  );
};

export default Form;