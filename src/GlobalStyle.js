import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    @font-face {
      font-family: 'Diphylleia-Regular';
      src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_JAMO@1.0/Diphylleia-Regular.woff2");
    }
    font-family: Diphylleia-Regular, sans-serif;
    font-weight: normal;
  }
  .App {
    height: 100vh;
    width: 100vw;
    min-width: 1200px;
    overflow: hidden;

    a {
      text-decoration: none;
    }
  }
`;

export default GlobalStyle;
