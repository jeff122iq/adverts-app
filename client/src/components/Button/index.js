import styled from "styled-components";

export const Button = styled.button`
  border: none;
  outline: none;
  color: #ffffff;
  font-weight: 600;
  background: linear-gradient(to right, #ff0099, #493240);
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 20px;
  text-transform: uppercase;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;
