import React, { useState, useContext } from 'react';

import { context } from '../../context/contextAuth'; //ContextAuth

import { Container, FormContainer, Input, LoginText, ButtonSubmit } from './styles';//Styles

const ModifyUser: React.FC = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { handleModify, userAuth, handleDelete } = useContext(context);
  //Function and states provides for context.

  return (
    <Container>
      <FormContainer>
        <LoginText>Modify your user</LoginText>
        <form onSubmit={e => handleModify(e, username, password, userAuth?.id)}>
          <Input type="text" value={username} placeholder="Coloque seu novo Username"
            onChange={e => setUsername(e.target.value)}
          />
          <Input type="password" value={password} placeholder="Coloque seu novo Password"
            onChange={e => setPassword(e.target.value)}
          />
          <ButtonSubmit type="submit">Modify User</ButtonSubmit>
        </form>
        <ButtonSubmit onClick={(e) => handleDelete(e, userAuth?.id)}>Delete This User</ButtonSubmit>
      </FormContainer>
    </Container>
  );
}

export default ModifyUser;
