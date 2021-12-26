import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    height: 100vh;
    width: 100vw;
    
    margin: 0;
    padding: 0;
  }
  a {
  text-decoration-line: none;
  }
`;

export default GlobalStyle;
