import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
:root {
  --primary: #0000ff;
  --secondary: #5efc8d;
  --light-gray: #cccccc;
}

body {
  font-family: Helvetica;
}

h3 {
  margin: 0;
  padding: 0;
}
`;

export const TextField = styled.input`
  padding: 12px 10px;
  border-radius: 3px;
  border: 1px solid var(--light-gray);
  font-size: 16px;
  margin: 10px;
`;

//.item-info
export const ItemInfo = styled.div`
  margin-left: 10px;
`;

//.item-title
export const ItemTitle = styled.h2`
  font-size: 30px;
`;

//.item-quantity
export const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

//.item-button
export const ItemButton = styled.button`
  background-color: white;
  color: black;
  border: 1px solid var(--light-gray);
  padding: 5px 20px;
  min-width: 50px;
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
  transition: opacity 200ms ease-out;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  margin-left: 10px;
  :active {
    box-shadow: 0 0px rgba(0, 0, 0, 0.2);
    transform: translateY(1px);
  }
  :hover {
    opacity: 0.8;
  }
  :disabled {
    opacity: 0.4;
    cursor: disabled;
  }
`;

//.item-total
export const NumContainer = styled.div`
  display: flex;
  justify-content: center;
  min-width: 2em;
`;

//.item-total
export const ItemTotal = styled.h3`
  font-size: 16px;
`;

export const UlList = styled.ul`
  list-style: none;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
`;

export const LiItem = styled.li`
  margin-bottom: 80px;
`;

//ui-link
export const AddTitle = styled.div`
  text-decoration: none;
  color: var(--primary);
`;

//.ui-container {
export const Container = styled.div`
  padding-top: 5px;
  width: 100vw;
  margin: 0 auto;
`;

export const StP = styled.p`
  color: red;
  border: 1px solid red;
  border-radius: 3px;
  display: inline;
  padding: 5px;
`;
