import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');
  
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: 'Roboto Condensed', sans-serif;
  }
`;

export default GlobalStyle;