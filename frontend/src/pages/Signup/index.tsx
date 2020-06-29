import React, { useState, useContext } from 'react';


import { context } from '../../context/contextAuth';

// import { Container } from './styles';

const Signup= () => {

  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');
  
  const {handleAuth} = useContext(context);

  return (
    <div>
      <form onSubmit={(e) => handleAuth(e, "signup", username, password)}>
        <p>username</p>
        <input type="text" placeholder="Bote um username..." 
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <p>password</p>
        <input type="password" placeholder="Coloque uma senha..."
          value={password} onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" >Click para cadrastar</button>
      </form>
    </div>
  );
}

export default Signup;