import styled from "styled-components";

export const StyledButton = styled.button`
  color: white;
  border: 0;
  padding: 15px 20px;
  margin: 10px;
  min-width: 150px;
  font-size: ${(props) => (!props.size ? "16px" : "12px")};
  border-radius: 3px;
  cursor: pointer;
  transition: opacity 200ms ease-out;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  background-color: var(${(props) => props.color});
  :hover {
    opacity: 0.8;
  }
  :disabled {
    opacity: 0.4;
    cursor: disabled;
  }
  :active {
    box-shadow: 0 0px rgba(0, 0, 0, 0.2);
    transform: translateY(1px);
  }
`;
