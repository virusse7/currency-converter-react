import "./style.css";
const Button = ({ text, convertCurrency }) => {
    return (

        <button onClick={convertCurrency} className="button">{text}</button>
    )
};
export default Button;