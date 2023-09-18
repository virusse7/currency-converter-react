import "./style.css";
import Legend from "../Legend";
import Label from "../Label";
import Footer from "../Footer";
import Button from "../Button";
import CurrencySelect from "../CurrencySelect";


const Form = () => {
  const onFormSubmit = (event) => {
    event.preventDefault();
  };



  return (
    <form className="form" onSubmit={onFormSubmit} >
      <fieldset className="fieldset">
        <Legend legend="Kalkulator walutowy" />
        <Label
          className="label"
          body={<CurrencySelect />}
        />
        <Button text="Przelicz!" />
        <Footer body="Kursy walut z dnia 23.07.23" />
      </fieldset>
    </form>
  );
};

export default Form;