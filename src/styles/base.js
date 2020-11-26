// styled-components base global style
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const BaseStyles = createGlobalStyle`
${normalize}

* {
  text-decoration: none;
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
  
  @media(max-width: 800px) {
  overflow-x: hidden;
  }
}

body {
  font-family: "DM Sans";
  background: ${(props) => props.theme.background};
  overscroll-behavior: none;

  @media(max-width: 800px) {
  overflow-x: hidden;
  }

  color: ${({ theme }) => theme.text};

  h1, h2, h3, h4 {
    font-family: "Poppins";
  }

  a {
    color: ${({ theme }) => theme.primary};
  }
}

`;
