import React, { useEffect, useState, useContext } from 'react';

import { api } from '../../Api/api';

import { User } from '../../context/types/types';

import { context } from '../../context/contextAuth';

import history from '../../history';


import { TableUser, ContainerTable, Td, TblContent } from './styles';//Styles.

const Table: React.FC = () => {
  const [user, setUser] = useState<User>();

  const { userAuth } = useContext(context); //User.

  /**
   * This useEffect will get the user's information by passing his token.
   * And then set the users for this users.
   */
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api({
          baseURL: "http://localhost:3333/api/auth/profile",
          method: "GET"
        })
        setUser(data);

      } catch (erro) {
        api.defaults.headers.Authorization = undefined;
        history.push('/');
      }
    })()
  }, [])
  return (
    // This ?. and || is to prevent any mistakes
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
  )
}



export default Table;
