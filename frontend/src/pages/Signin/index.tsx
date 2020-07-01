import React, { useState, useContext } from 'react';

import { context } from '../../context/contextAuth';

// import { Container } from './styles';

const Signin = () => {

  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const { handleAuth, mensage } = useContext(context);

  return (
    <div>
      <form onSubmit={(e) => {
        handleAuth(e, 'signin', username, password)
        setPassword('');
        setUsername('');
      }}>
        <p>username</p>
        <input type="text" placeholder="Bote um username..."
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <p>password</p>
        <input type="password" placeholder="Coloque uma senha..."
          value={password} onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Click para logar</button>
      </form>
      <p>{mensage}</p>
    </div>
  );
}

export default Signin;