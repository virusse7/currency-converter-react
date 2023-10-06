import styled from "styled-components";

export const Legend = styled.legend`
  background-color: black;
  border-radius: 20px;
  text-align: left;
  font-size: large;
  border: 2px solid hsl(24, 98%, 68%);
  padding: 10px;
`;

export const Footer = styled.footer`
  color: #fff;
  text-align: right;
`;

export const Button = styled.button`
  border-style: none;
  border-radius: 10px;
  background-color: hsl(19, 68%, 58%);
  width: 250px;
  padding: 4px;
  margin: 2px;
  transition: 1s;

  &:active {
    background-color: hsl(19, 68%, 45%)
  }
  &:hover {
    background-color: hsl(19, 68%, 53%)
  }
`;

export const Fieldset = styled.fieldset`
    background-color: black;
    border: 5px double;
    border-radius: 20px;
    border-color: hsl(19, 58%, 45%);
    color: hsl(0, 0%, 100%);
`;

export const InputAmount = styled.input`
  text-align: center;
  border-radius: 50px;
  background-color: hsl(0, 0%, 85%);
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