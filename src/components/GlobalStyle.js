import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    @media (max-width: 1700px) {
      font-size: 75%;
    }
  }

  body {
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden
  }

  button {
    background: transparent;
    border-radius: 2px;
    border: 3px solid #23d997;
    color: #fff;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-size: 1.1.rem;
    font-weight: bold;
    padding: 1rem 2rem;
    transition: all .5s ease;

    &:hover {
      background: #23d997;
      color: #fff
    } 
  }

  h2 {
    font-size: 4rem;
    font-weight: lighter;
  }

  h3 {
    color: #fff;
  }

  h4 {
    font-size: 2rem;
    font-weight: bold;
  }

  a {
    font-size: 1.1rem;
  }

  span {
    color: #23d997;
    font-weight: bold;
  }

  p {
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
    padding: 3rem 0rem;
  }
`;

export default GlobalStyle;
