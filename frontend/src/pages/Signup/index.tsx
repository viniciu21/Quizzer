import React, { useState, FormEvent } from 'react';

import axios from 'axios';
// import { Container } from './styles';

const Signup= () => {

  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');


  const signinPost = async (e:FormEvent) => {
    
    e.preventDefault();


    const {data: {token}} = await axios({
      baseURL: 'http://localhost:3333/api/auth/signup',
      method: "POST",
      data:{ username, password},
    });
    
    console.log(token);

    setPassword('');
    setUsername('');

  };
  return (
    <div>
      <form onSubmit={(e) => signinPost(e)}>
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