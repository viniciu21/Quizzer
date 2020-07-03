import React, { useEffect, useState, useContext } from 'react';

import { context } from '../../context/contextAuth';
import { Link } from 'react-router-dom';
import { api } from '../../Api/api';
import { User } from '../../context/contextAuth';

import { Container, ButtonsConteiner, TableUser, ContainerTable, Td, TblContent } from './styles';


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
      <ContainerTable>
        <TableUser>
          <h1>Welcome {user?.username}</h1>
          <table>
            <thead>
              <tr>
                <th>Points</th>
                <th>Times</th>
                <th>Hard Quests</th>
                <th>Medium Quests</th>
                <th>Easy Quests</th>
              </tr>
            </thead>
          </table>
        </TableUser>
        <TblContent>
          <table>
            <tbody>
              <tr>
                <Td>{user?.points || userAuth?.points}</Td>
                <Td>{user?.time || userAuth?.time}</Td>
                <Td>{user?.hard || userAuth?.hard}</Td>
                <Td>{user?.medium || userAuth?.medium}</Td>
                <Td>{user?.easy || userAuth?.easy}</Td>
              </tr>
            </tbody>
          </table>
        </TblContent>
      </ContainerTable>

      {/* <span>Username: {user?.username || userAuth?.username}</span>
        <span>Points: {user?.points || userAuth?.points}</span>
        <span>Media Times : {user?.time || userAuth?.time}</span>
        <span>Number of questions answered at Hard level: {user?.hard || userAuth?.hard}</span>
        <span>Number of questions answered at Medium level: {user?.medium || userAuth?.medium}</span>
        <span>Number of questions answered at Easy level: {user?.easy || userAuth?.easy}</span> */}
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
