import styled from "styled-components";

export const StyledClock = styled.div`
    text-align: right;
    color: ${({ theme }) => theme.color.VistaWhite};
    font-family: monospace;
    font-size: 14px;
    padding-top: 10px;
    padding-bottom: 20px;
`;