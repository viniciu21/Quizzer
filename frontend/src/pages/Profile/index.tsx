import React, { useEffect, useState, useContext } from 'react';

import { context } from '../../context/contextAuth';
import { Link } from 'react-router-dom';
import { api } from '../../Api/api';
import { User } from '../../context/contextAuth';

import { Container, ButtonsConteiner, TextContainer } from './styles';


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
    <Container>
      <TextContainer>
        <span>Username: {user?.username || userAuth?.username}</span>
        <span>Points: {user?.points || userAuth?.points}</span>
        <span>Media Times : {user?.time || userAuth?.time}</span>
        <span>Number of questions answered at Hard level: {user?.hard || userAuth?.hard}</span>
        <span>Number of questions answered at Medium level: {user?.medium || userAuth?.medium}</span>
        <span>Number of questions answered at Easy level: {user?.easy || userAuth?.easy}</span>
      </TextContainer>
      <ButtonsConteiner>
        <a onClick={handleLogout}><span>Sair</span></a>
        <Link to='/modify'><span>Modificar Usuário</span></Link>
        <Link to='/quiz'><span>Começar um novo quizz</span></Link>
        <Link to='/rank'><span>Ver ranqueamento</span></Link>
      </ButtonsConteiner>
    </Container>
  );
}

export default Profile;
