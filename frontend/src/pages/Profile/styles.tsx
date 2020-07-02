import styled, { keyframes } from 'styled-components';

const altrAfter = keyframes`
  0% {transform: translateX(-100%)}
  100% {transform: translateX(101%)}
`
const altrBefore = keyframes`
  0% {transform: translateX(0)}
  100% {transform: translateX(200%)}
`


export const Container = styled.div`
  min-height: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

export const ButtonsConteiner = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  a{
    margin: 20px auto;
	  border: none;
	  padding: 10px 34px;
	  font-size: 26px;
    position: relative;
    &::before{
      transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      content: '';
      width: 50%;
      height: 100%;
      background:blueviolet;
      position: absolute;
      top: 0;
      left: 0;
      border-radius:50px;
    }
    & > span{
      color: white;
      mix-blend-mode: screen;
      cursor: pointer;
    }
    &:hover{
		  &::before{
			  background: blueviolet;
		    width: 100%;
	    }
	  }
  }
`;

export const TextContainer = styled.div`
  font-size: 2em;
  font-weight: normal;
  & > span{
    position: relative;
    overflow: hidden;
    display: block;
    line-height: 1.2;
    &::after{
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, #8f94fb, #4e54c8);
      animation: ${altrAfter} 2s cubic-bezier(.77,0,.18,1) forwards;
      transform: translateX(-101%);
    }
    &::before{
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, #8f94fb, #4e54c8);
      animation: ${altrBefore} 2s cubic-bezier(.77,0,.18,1) forwards;
      transform: translateX(0);
    }
  }
    & >span:nth-of-type(1)::before,
    & >span:nth-of-type(1)::after{
      animation-delay: 1s;
    }
    & >span:nth-of-type(2)::before,
    & >span:nth-of-type(2)::after{
      animation-delay: 1.5s;
    }

    & >span:nth-of-type(3)::before,
    & >span:nth-of-type(3)::after{
      animation-delay: 2s;
    }
    & >span:nth-of-type(4)::before,
    & >span:nth-of-type(4)::after{
      animation-delay: 2.5s;
    }

    & > span:nth-of-type(5)::before,
    & > span:nth-of-type(5)::after{
      animation-delay: 3s;
    }
    & > span:nth-of-type(6)::before,
    & > span:nth-of-type(6)::after{
      animation-delay: 3.5s;
    }
`

