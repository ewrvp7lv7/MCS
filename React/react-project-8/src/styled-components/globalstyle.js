import { createGlobalStyle } from "styled-components";

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

.ui-link {
  text-decoration: none;
  color: var(--primary);
}

.ui-title {
  font-family: Helvetica;
}

.ui-container {
  padding-top: 5px;
  width: 100vw;
  margin: 0 auto;
}

.ui-textfield {
  padding: 12px 10px;
  border-radius: 3px;
  border: 1px solid var(--light-gray);
  font-size: 16px;
}

.ui-button {
  background-color: var(--primary);
  color: white;
  border: 0;
  padding: 15px 20px;
  min-width: 150px;
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
  transition: opacity 200ms ease-out;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
}

.ui-button:hover {
  opacity: 0.8;
}

.ui-button:disabled {
  opacity: 0.4;
  cursor: disabled;
}

.ui-button:active {
  box-shadow: 0 0px rgba(0, 0, 0, 0.2);
  transform: translateY(1px);
}

[class^="ui-"] {
  margin: 10px;
}

.ui-list {
  list-style: none;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
}

.ui-item-list {
  margin-bottom: 80px;
}

.item-info {
  margin-left: 10px;
}

.item-title {
  font-size: 30px;
}

.item-quantity {
  display: flex;
  align-items: center;
  margin-bottom: 50px;
}

.item-button {
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
}

.item-button:active {
  box-shadow: 0 0px rgba(0, 0, 0, 0.2);
  transform: translateY(1px);
}

.item-button:hover {
  opacity: 0.8;
}

.item-button:disabled {
  opacity: 0.4;
  cursor: disabled;
}

.item-total {
  font-size: 16px;
}

`;
