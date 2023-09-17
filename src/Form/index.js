import "./style.css";
import Legend from "../Legend";
import Label from "../Label";
import Footer from "../Footer";
import Button from "../Button";
import Result from "../Result";
import { useState } from "react";


const Form = () => {
  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  const [amount, setAmount] = useState("");

  const currencies = [
    { name: "EUR", value: 4.46, label: "Euro" },
    { name: "USD", value: 4.01, label: "Dolar Amerykański" },
    { name: "ARS", value: 0.015, label: "Peso Argentyńskie" },
  ];

  const [selectedOption, setSelectedOption] = useState("");

  return (
    <form className="form" onSubmit={onFormSubmit} >
      <fieldset className="fieldset">
        <Legend legend="Kalkulator walutowy" />

        <div className="labels">
          <Label
            text="Wprowadź kwotę w zł żeby przewalutować: "
            body={
              <input
                className="label__amount"
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                name="amount"
                required
                placeholder="0 zł"
                type="number"
                step="0.01"
                min="0.01"
                max="100000"
              />
            }
          />
          <Label
            text="Wybierz walutę: "
            body={
              <select
                options={currencies}
                value={selectedOption}
                onChange={setSelectedOption}
                className="label__selectCurrency"
              >
              </select>
            }
          />
        </div>
        <Result />
        <Button text="Przelicz!" />
        <Footer body="Kursy walut z dnia 23.07.23" />
      </fieldset>
    </form>
  );
};

export default Form;