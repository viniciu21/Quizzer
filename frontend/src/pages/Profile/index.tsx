import React, { useEffect, useState, useContext } from 'react';

import { context } from '../../context/contextAuth';
import { Link } from 'react-router-dom';
import { api } from '../../Api/api';
import { User } from '../../context/contextAuth';

// import { Container } from './styles';


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
        <h1>Id :{user?.id || userAuth?.id}</h1>
        <h1>Username : {user?.username || userAuth?.username}</h1>
        <h1>Points : {user?.points || userAuth?.points}</h1>
        <h1>Media Times : {user?.time || userAuth?.time}</h1>
        <h1>Quantidade de questões acertada nivel Dificil: {user?.hard || userAuth?.hard}</h1>
        <h1>Quantidade de questões acertada nivel Medium: {user?.medium || userAuth?.medium}</h1>
        <h1>Quantidade de questões acertada nivel Easy: {user?.easy || userAuth?.easy}</h1>
      </div>
      <button onClick={handleLogout}>Sair</button>
      <br />
      <Link to='/modify'>Modificar Usuário</Link>
      <br />
      <Link to='/quiz'>Começar um novo quizz</Link>
      <br />
      <Link to='/rank'>Ver ranqueamento</Link>
    </div>

  );
}

export default Profile;
