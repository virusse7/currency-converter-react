import styled from "styled-components";

export const Select = styled.select`
    width: 160px;
    margin: 0 auto;
    text-align: center;
    background-color: ${({ theme }) => theme.color.Alto};
    border-radius: 10px;
`;