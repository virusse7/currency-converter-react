import React from "react";
import "./style.css";

const Result = ({ result }) => {
    return (
        <div className="resultContainer">
            <h2>Po przewalutowaniu otrzymasz:</h2>
            <p>{result}</p>
        </div>
    );
};

export default Result;