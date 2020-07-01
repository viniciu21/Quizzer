import React, { useState, useContext } from 'react';
import { context } from '../../context/contextAuth';


// import { Container } from './styles';

const ModifyUser: React.FC = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { handleModify, userAuth, handleDelete } = useContext(context);

  return (
    <div>
      <form onSubmit={e => handleModify(e, username, password, userAuth?.id)}>
        <input type="text" value={username} placeholder="Coloque seu novo Username"
          onChange={e => setUsername(e.target.value)}
        />
        <input type="password" value={password} placeholder="Coloque seu novo Password"
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Modifique</button>
      </form>
      <button onClick={(e) => handleDelete(e, userAuth?.id)}>Delete</button>
    </div>
  );
}

export default ModifyUser;