import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --background: #0A0F0D;
    --surface: #121A17;
    --primary: #1F4D3A;
    --primary-hover: #2C6A50;
    --text: #FFFFFF;
    --text-secondary: #B8C4BE;
    --border: #2A3832;
  }

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html{
    scroll-behavior:smooth;
  }

  body{
    font-family: 'Segoe UI', sans-serif;
    background: var(--background);
    color: var(--text);
  }

  a{
    text-decoration:none;
    color:inherit;
  }

  button{
    border:none;
    cursor:pointer;
    font-family:inherit;
  }

  img{
    max-width:100%;
    display:block;
  }
`;

export default GlobalStyle;