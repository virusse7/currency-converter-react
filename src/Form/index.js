import "./style.css";
import Legend from "../Legend";
import Label from "../Label";
import Footer from "../Footer";
import Button from "../Button";
import Result from "../Result";


const Form = () => {
  const onFormSubmit = (event) => {
    event.preventDefault();
  };


  return (
    <form className="form" onSubmit={onFormSubmit} >
      <fieldset className="fieldset">
        <Legend legend="Kalkulator walutowy" />

        <div className="labels">
          <Label
            text="Wprowadź kwotę w zł żeby przewalutować: "
            body={
              <input className="label__amount"
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
                className="label__selectCurrency"
                name="selectCurrency"
              >
                <option value="EUR">Euro</option>
                <option value="USD">Dolar</option>
                <option value="ARS">Peso argentyńskie</option>
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