import "./style.css";
import { useState } from "react";

const CurrencySelect = ({ setResult }) => {
    const currencies = [
        { label: "EUR", value: 0.23, name: "Euro" },
        { label: "USD", value: 0.25, name: "Dolar Amerykański" },
        { label: "ARS", value: 66.67, name: "Peso Argentyńskie" },
    ];

    const [selectedOption, setSelectedOption] = useState("EUR");
    const currencyChange = (event) => {
        setSelectedOption(event.target.value);
    };


    return (
        <>
            <div className="selectContainer">
                <select
                    className="selectCurrency"
                    value={selectedOption}
                    onChange={currencyChange}
                >
                    {currencies.map((currency) => (
                        <option value={currency.label} key={currency.label}>
                            {currency.name}
                        </option>
                    ))};
                </select>
            </div>
        </>
    );
};

export default CurrencySelect;