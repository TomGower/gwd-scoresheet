const { createGlobalStyle } = require('styled-components');

const GlobalStyle = createGlobalStyle`
  html, body, button {
    margin: 0;
    font-family: 'Roboto', Arial, sans-serif;
    font-size: 1rem;
  }
`;

export default GlobalStyle;
