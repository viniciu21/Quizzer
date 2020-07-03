import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;


export const TutorialGame = styled.div`
  min-width: 400px;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(0,0,0,0.7);
`;

export const QuizzerContainer = styled.div`
  min-width: 400px;
  height: 50vh;
  form{
    display: flex;
    align-items:center;
    flex-direction: column;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    input{
      width: 100%;
      padding: 10px;
      /* background-color: #56baed; */
      border: 1px solid rgba(0,0,0, 0.5);
      color: black;
      padding: 10px;
      /* text-align: center; */
      text-decoration: none;
      display: inline-block;
      font-size: 13px;
      box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
      border-radius: 5px 5px 5px 5px;
      margin: 5px 10px 10px 10px;
      transition: all 0.3s ease-in-out;
      &:hover{
        background-color: #39ace7;
        transform: scale(0.95);
      }
    }
    select{
      margin: 5px 10px 10px 10px;
      width: 100%;
      padding: 10px;
      color: black;
      cursor: pointer;
      /* appearance: none; */
      outline: 0;
      box-shadow: none;
      border: 1px solid rgba(0,0,0, 0.5);
      background: white;
      background-image: none;
      transition: all ease-in-out 0.3s;
      border-radius: 5px 5px 5px 5px;
      box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
      &:hover{
        background-color: #39ace7;
        transform: scale(0.95);
        color: white;
      }
    }
  }
`;

export const ButtomSubmit = styled.button`
  cursor: pointer;
  color: rgba(0,0,0,1);
	background: none;
	border-radius: 5px;
	padding: 1.2em 4em;
	/* letter-spacing: 0.35em; */
	font-size: 1.1rem;
	transition: all 0.3s;
  /* margin: 1em; */
  box-shadow: inset 0 0 1em rgba(0,170,170,0.1), 0 0 1em rgba(0,170,170,0.1);
  border: #0dd solid 2px;
  &:hover{
    color: rgba(255,255,255,1);
    background-color: #0dd;
    box-shadow: inset 0 0 0 rgba(0,170,170,0.3), 0 0 1.5em rgba(0,170,170,0.4);
    transform: scale(0.95);
  }
`

export const ContainerQuizer = styled.div`
  background-color: rgba(255,255,255, 0.3);
  padding: 30px;
  border-radius: 10px;
`;
