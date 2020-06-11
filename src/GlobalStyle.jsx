import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  body {
    width: 100%;
    overflow: hidden;
    font: 400 14px "Lato", sans-serif;
    background: #F0F0F5;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    color: #363636;
  }

  input, button, textarea {
    font: 400 18px Lato, sans-serif;
  }

  button {
    cursor: pointer;
  }

  form input {
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
  }
`;

export default GlobalStyle;