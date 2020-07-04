import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ButtonsConteiner = styled.div`
  width: 60vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  a{
    margin: 20px auto;
	  border: none;
	  padding: 10px 24px;
	  font-size: 20px;
    position: relative;
    &::before{
      transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      content: '';
      width: 50%;
      height: 100%;
      background:black;
      position: absolute;
      top: 0;
      left: 0;
      border-radius:50px;
    }
    & > span{
      color: white;
      mix-blend-mode:difference;
      cursor: pointer;
    }
    &:hover{
		  &::before{
        color:white;
			  background: black;
		    width: 100%;
	    }
    }
  }
`;
