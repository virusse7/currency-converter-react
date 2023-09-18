import "./style.css";
import { useState } from "react";

const CurrencySelect = () => {
    const [selectedOption, setSelectedOption] = useState("EUR");
    const currencyChange = (event) => {
        setSelectedOption(event.target.value)
    };

    const currencies = [
        { label: "EUR", value: 4.46, name: "Euro" },
        { label: "USD", value: 4.01, name: "Dolar Amerykański" },
        { label: "ARS", value: 0.015, name: "Peso Argentyńskie" },
    ];
    return (
        <select className="selectCurrency" value={selectedOption} onChange={currencyChange}>
            {currencies.map((currency) => (
                <option value={currency.label} key={currency.label}>
                    {currency.name}
                </option>
            ))};
        </select>
    );
};

export default CurrencySelect;