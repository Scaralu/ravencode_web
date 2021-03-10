import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  
  body {
    margin: 0;
    padding: 0;
    background: #282d30;
    font-family: monaco, 'Montserrat', sans-serif;
    letter-spacing: .15em;
    overflow-x: hidden;
  }  
`;

// font-family: 'Montserrat', sans-serif;


export default GlobalStyle;