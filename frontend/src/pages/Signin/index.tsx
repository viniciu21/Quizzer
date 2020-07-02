import React, { useState, useContext } from 'react';

import { context } from '../../context/contextAuth';

import { Container, FormContainer, LoginText, Input, ErroMensage } from './styles';

const Signin = () => {

  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const { handleAuth, mensage } = useContext(context);

  return (
    // import { Container } from './styles';
    <Container>
      <FormContainer>
        <LoginText>Logar</LoginText>
        <form onSubmit={(e) => {
          handleAuth(e, 'signin', username, password);
          setPassword('');
          setUsername('');
        }}>
          <Input type="text" placeholder="Bote um username..." value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <Input type="password" placeholder="Coloque uma senha..."
            value={password} onChange={e => setPassword(e.target.value)}
          />
          <Input type="submit" value="Click para logar" />
        </form>
        <ErroMensage >{mensage}</ErroMensage>
      </FormContainer>
    </Container >
  );
}

export default Signin;
