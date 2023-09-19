import "./style.css";
const Button = ({ text, convertCurrency }) => (
    <button onClick={convertCurrency} className="button">{text}</button>
);
export default Button;