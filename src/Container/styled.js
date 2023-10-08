import styled from "styled-components";

export const Main = styled.main`
    font-family: "Lato" ,sans-serif;
    padding-top: 100px;
    margin: 0 auto;
    text-align: center;
    max-width: 1000px;
    width: 100%;
    background-color: ${({ theme }) => theme.color.CocoaBrown};
    background-color: transparent;
`;