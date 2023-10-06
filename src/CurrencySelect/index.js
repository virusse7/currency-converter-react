import { Select } from "./styled";

const CurrencySelect = ({ onCurrencyChange, selectedCurrency }) => {
    const currencies = [
        { label: "EUR", value: 0.23, name: "Euro" },
        { label: "USD", value: 0.25, name: "Dolar Amerykański" },
        { label: "ARS", value: 66.67, name: "Peso Argentyńskie" },
    ];

    const currencyChange = (event) => {
        const newCurrency = event.target.value;
        onCurrencyChange(newCurrency);
    };


    return (
        <Select
            value={selectedCurrency}
            onChange={currencyChange}
        >
            {currencies.map((currency) => (
                <option value={currency.label} key={currency.label}>
                    {currency.name}
                </option>
            ))};
        </Select>
    );
};

export default CurrencySelect;