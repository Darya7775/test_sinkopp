import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  body,
  html {
    margin: 0;
    height: 100%;
  }

  body {
    position: relative;
    min-height: 100%;
    font-family: "Raleway", "Arial", sans-serif;
    font-size: 16px;
    line-height: 150%;
    font-weight: 400;
    color: #000000;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  img {
    display: block;
  }

  #root {
    position: relative;

    display: flex;
    flex-direction: column;
    min-height: 100vh;

    header,
    footer {
      flex-shrink: 0;
    }

    main {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
  }
`;
