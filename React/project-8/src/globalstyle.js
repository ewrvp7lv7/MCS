import { createGlobalStyle, css } from "styled-components";

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



// Создаем css фрагмент
export const buttonStyles = css`
background-color: var(--primary);
color: white;
border: 0;
padding: 15px 20px;
margin: 10px;
min-width: 150px;
font-size: 16px;
border-radius: 3px;
cursor: pointer;
transition: opacity 200ms ease-out;
box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
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