import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  html, body, #__next {
    width: 100% !important;
    height: 100% !important;
  }
`;

export default GlobalStyle;
