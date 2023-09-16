
import "./style.css";

const Form = () => (
    <form className="form js-form">
        <fieldset className="fieldset">
            <legend className="form__legend">Kalkulator walutowy</legend>
            <p>
                <label>
                    Wprowadź kwotę w zł żeby przewalutować:
                    <input className="form__amount js-amount" name="amount" required placeholder="0 zł"
                        type="number" step="0.01" min="0.01" max="1000000" />
                </label>
            </p>
            <p>
                <label>
                    Wybierz walutę:
                    <select className="form__selectCurrency js-selectCurrency" name="selectCurrency">
                        <option value="EUR">Euro</option>
                        <option value="USD">Dolar</option>
                        <option value="ARS">Peso argentyńskie</option>
                    </select>
                </label>
            </p>
            <p className="form__result">
                Kwota którą otrzymasz to:<strong className="js-result"></strong>
            </p>
            <p>
                <button className="fieldset__convert">Przelicz</button>
            </p>


        </fieldset>
    </form>
);

export default Form;