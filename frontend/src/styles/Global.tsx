import { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.min.css';

/**
 * Global style.
 */
export const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Muli:wght@300&display=swap');
  *{
    text-decoration: none;
    padding: 0;
    margin: 0;
    outline: none;
    box-sizing: border-box;
    font-family: "Muli";

  }
  body,html, #root{
    background: #18cfe2;
    width: 100vw;
    height: 100vh;
  }
`
