import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    @import url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_JAMO@1.0/Diphylleia-Regular.woff2");
    font-family: Diphylleia-Regular, sans-serif !important;
    margin: 0;
    padding: 0;
  }
  .App {
    height: 100vh;
    width: 100vw;
    min-width: 1200px;

    a {
      text-decoration: none;
    }
  }
`;

export default GlobalStyle;
