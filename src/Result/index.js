import "./style.css";

const Result = ({ result, selectedCurrency }) => {
    return (
        <div className="resultContainer">
            <h2>Po przewalutowaniu otrzymasz:</h2>
            <p className="resultContainer__result">{result} {selectedCurrency}</p>
        </div>
    );
};

export default Result;