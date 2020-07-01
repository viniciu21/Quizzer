import React, { useEffect, useState, useContext } from 'react';

import { context } from '../../context/contextAuth';
import { Link } from 'react-router-dom';
import { api } from '../../Api/api';

// import { Container } from './styles';

interface User {
  id: number,
  username: string,
  password: string,
  points: number
}

const Profile: React.FC = () => {

  const [user, setUser] = useState<User>();

  const { handleLogout, userAuth } = useContext(context);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api({
          baseURL: "http://localhost:3333/api/auth/profile",
          method: "GET"
        })
        setUser(data);

      } catch (erro) {
        console.log(erro.response.data);
      }
    })()
  }, [])

  return (
    <div>
      <div>
        <h1>Id :{userAuth?.id || user?.id}</h1>
        <h1>Username : {userAuth?.username || user?.username}</h1>
        <h1>Points : {userAuth?.points || user?.points}</h1>
      </div>
      <button onClick={handleLogout}>Sair</button>
      <br />
      <Link to='/modify'>Modificar Usuário</Link>
      <br />
      <Link to='/quiz'>Começar um novo quizz</Link>
      <br />
      <Link to='/modify'>Ver ranqueamento</Link>
    </div>

  );
}

export default Profile;