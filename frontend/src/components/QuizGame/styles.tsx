import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
  height: 60%;
  width: 50%;
  background-color: whitesmoke;
  border-radius: 10px;
  padding: 20px;
`;

export const TextInfoContainer = styled.div`
  p{
    line-height: 25px;
    font-size: 1.2rem;
    &:nth-child(4){
      font-weight: 900;
    }
  }
`;

export const QuestButtom = styled.button`
  cursor: pointer;
  background-color: white;
  border: 1px solid #16FF01;
  font-size: 1.2em;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  :hover{
    background-color: #16FF01;
    transform: scale(0.95);
  }
`

export const SaveContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  p{
    font-size: 1.2rem;
  }
  button{
    background-color: none;
    border: 1px solid black;
    cursor: pointer;
    font-size: 1.2em;
    border-radius: 5px;
    padding: 10px;
    transition: all 0.3s ease-in-out;
    :hover{
      color: white;
      background-color: black;
      transform: scale(1.2);
    }
  }
`;
