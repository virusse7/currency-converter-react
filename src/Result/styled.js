import styled from "styled-components";

export const ResultContainer = styled.div`
    border: 2px solid black;
    border-radius: 10px;
    color: black;
    background-color: hsl(0, 0%, 85%);
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ResultText = styled.p`
    font-size: large;
    font-weight: 700;
    margin: 0;
    padding-bottom: 20px;
`;