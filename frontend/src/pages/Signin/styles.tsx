import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
`;

export const FormContainer = styled.div`
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  text-align: center;
  input[type=text],input[type=password]{
    background-color: #f6f6f6;
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 5px;
    width: 85%;
    border: 2px solid #f6f6f6;
    transition: all 0.5s ease-in-out;
    border-radius: 5px 5px 5px 5px;
    color: black;
    &:focus{
      background-color: #fff;
      border-bottom: 2px solid #5fbae9;
    }
  }
`;


export const LoginText = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 900;
  text-transform: uppercase;
  display:inline-block;
  margin: 40px 8px 10px 8px;
`
export const Input = styled.input`
  background-color: #56baed;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  transition: all 0.3s ease-in-out;
  &:hover{
    background-color: #39ace7;
    transform: scale(0.95);
  }
`



export const ErroMensage = styled.div`
  color: white;
  background-color: black;
`
