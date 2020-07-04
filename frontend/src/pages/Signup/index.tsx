import React, { useState, useContext } from 'react'; //Hooks

import { context } from '../../context/contextAuth'; //ContextAuth

import { Container, FormContainer, LoginText, Input, ErroMensage } from '../Signin/styles'; //Styles

const Signup = () => {

  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const { handleAuth, mensage } = useContext(context); //Function and state of our context.

  return (
    <Container>
      <FormContainer>
        <LoginText> Signup </LoginText>
        <form onSubmit={(e) => {
          handleAuth(e, "signup", username, password);
          setPassword('');
          setUsername('');
        }}>
          <Input type="text" placeholder="Put a username..."
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <Input type="password" placeholder="Put a password"
            value={password} onChange={e => setPassword(e.target.value)}
          />
          <Input type="submit" value="Click to signup" />
        </form>
        <ErroMensage>{mensage}</ErroMensage>
      </FormContainer>
    </Container>
  );
}

export default Signup;
