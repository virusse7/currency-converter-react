import "./style.css";
import { useState } from "react";

const CurrencySelect = () => {
    const currencies = [
        { label: "EUR", value: 0.23, name: "Euro" },
        { label: "USD", value: 0.25, name: "Dolar Amerykański" },
        { label: "ARS", value: 66.67, name: "Peso Argentyńskie" },
    ];

    const [selectedOption, setSelectedOption] = useState("EUR");
    const [amount, setAmount] = useState(0);
    const [result, setResult] = useState(0);

    const currencyChange = (event) => {
        setSelectedOption(event.target.value);
        convertCurrency(amount, event.target.value);
    };

    const convertCurrency = (inputAmount, targetCurrency) => {
        const selectedCurrency = currencies.find((currency) => currency.label === targetCurrency);
        if (selectedCurrency) {
            const convertedResult = inputAmount / selectedCurrency.value;
            setResult(convertedResult);
        };
    };

    const handleAmountChange = (event) => {
        const newAmount = parseFloat(event.target.value);
        if (!isNaN(newAmount)) {
            setAmount(newAmount);
            convertCurrency(newAmount, selectedOption);
        };
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
                <p>
                    Wpisz ilość w złotówkach
                </p>
                <input
                    className="selectContainer__input"
                    type="number"
                    min={0.00}
                    step={0.01}
                    value={amount}
                    onChange={handleAmountChange}
                />
            </div>
            <p className="result">{result} {selectedOption}</p>
        </>
    );
};

export default CurrencySelect;