import "./style.css";
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

    const convertedResult = (amount * selectedCurrencyValue);

    setResult(convertedResult.toFixed(2));
  };



  return (
    <form className="form" onSubmit={onFormSubmit} >
      <fieldset className="fieldset">
        <legend className="fieldset__legend">Kalkulator walutowy</legend>
        <label className="label">
          <p className="label__paragraph">Wybierz walutę którą chcesz przewalutować:</p>
          <CurrencySelect onCurrencyChange={handleCurrencyChange} setResult={setResult} />
          <div className="label__container">
            <p className="label__paragraph">Wpisz kwotę do przewalutowania w zł</p>
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
              min="1"
              max="100000"
            />
            <button onClick={convertCurrency} className="label__button">Przelicz!</button>
          </div>
        </label>
        <Result result={result} selectedCurrency={selectedOption} />
        <footer className="fieldset__footer">Kursy walut z dnia 23.07.23</footer>
      </fieldset>
    </form>
  );
};

export default Form;