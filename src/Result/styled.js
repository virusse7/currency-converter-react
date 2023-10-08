import styled from "styled-components";

export const ResultContainer = styled.div`
    border: 2px solid ${({ theme }) => theme.color.Black};
    border-radius: 10px;
    color: ${({ theme }) => theme.color.Black};
    background-color: ${({ theme }) => theme.color.Alto};
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