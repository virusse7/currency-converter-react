import "./style.css";

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
        <>
            <div className="selectContainer">
                <select
                    className="selectCurrency"
                    value={selectedCurrency}
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