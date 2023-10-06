import { ResultContainer, ResultText } from "./styled";

const Result = ({ result, selectedCurrency }) => {
    return (
        <ResultContainer>
            <h2>Po przewalutowaniu otrzymasz:</h2>
            <ResultText>{result} {selectedCurrency}</ResultText>
        </ResultContainer>
    );
};

export default Result;