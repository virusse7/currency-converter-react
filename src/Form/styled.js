import styled from "styled-components";

export const Legend = styled.legend`
  background-color: ${({ theme }) => theme.color.Black};
  border-radius: 20px;
  text-align: left;
  font-size: large;
  border: 2px solid ${({ theme }) => theme.color.Orange};
  padding: 10px;
`;

export const Footer = styled.footer`
  color: ${({ theme }) => theme.color.White};
  text-align: right;
`;

export const Button = styled.button`
  border-style: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.RedDamask};
  width: 250px;
  padding: 4px;
  margin: 2px;
  transition: 1s;

  &:active {
    background-color: ${({ theme }) => theme.color.Piper};
  }
  &:hover {
    background-color: ${({ theme }) => theme.color.OrangeDamask};
  }
`;

export const Fieldset = styled.fieldset`
    background-color: ${({ theme }) => theme.color.Black};
    border: 5px double;
    border-radius: 20px;
    border-color: ${({ theme }) => theme.color.Tuscany};
    color: ${({ theme }) => theme.color.White};
`;

export const InputAmount = styled.input`
  text-align: center;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.color.Alto};
  padding: 4px;
  margin: 2px;
  width: 250px;
`;

export const Content = styled.p`
  margin: 0;
  padding: 10px;
`;

export const Div = styled.div`
  padding: 5px;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  gap: 5px;
`;

export const Failure = styled.p`
  ${({ theme }) => theme.color.Red};
`;

export const Loading = styled.p`
  ${({ theme }) => theme.color.White};
`;