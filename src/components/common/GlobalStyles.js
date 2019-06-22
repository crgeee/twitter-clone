import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    color: #333;
    margin: 0;
    background-color: #8EC5FC;
    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
    background-repeat: no-repeat;
    min-height: 100%;
    min-height: 100vh;
    overflow: auto;
  }
`;

export default GlobalStyle;
