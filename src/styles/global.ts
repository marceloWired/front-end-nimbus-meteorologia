import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --defaultBackground: #160f24;
    --semChuva: #95c241;
    --chuvaFraca: #2662d8;
    --chuvaModerada: #c78e33;
    --chuvaForte: #cc3b35;
  }
  
  .ChuvaForte {
    color: var(--chuvaForte);
    font-weight: bold;
  }

  .ChuvaFraca {
    color: var(--chuvaFraca);
    font-weight: bold;
  }

  .ChuvaModerada {
    color: var(--chuvaModerada);
    font-weight: bold;
  }

  .SemChuva {
    color: var(--semChuva);
    font-weight: bold;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #d3e0b3;
    font-family: Arial, Helvetica, sans-serif;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%
    }
  }
  
  body {
    background-color: var(--defaultBackground);
  }
`