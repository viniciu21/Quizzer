import styled, { createGlobalStyle } from 'styled-components';

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
    background: #18cfe2;  /* fallback for old browsers */
    /* background: -webkit-linear-gradient(to right, #8f94fb, #4e54c8);  Chrome 10-25, Safari 5.1-6 */
    /* background: linear-gradient(to right, #8f94fb, #4e54c8); W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+,  Safari 7+ */
    width: 100vw;
    height: 100vh;
  }
`
