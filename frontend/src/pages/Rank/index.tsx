import React, { useState, useEffect } from 'react';

import { User } from '../../context/contextAuth';

import { api } from '../../Api/api';

// import { Container } from './styles';

const Rank: React.FC = () => {

  const [users, setUsers] = useState<User[]>([{
    username: "marcelo",
    id: 3,
    password: "macaco",
    points: 100,
    time: 0
  }]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('http://localhost:3333/api/auth/users');
      console.log(data);
      setUsers(data);
    })()
  }, [])


  const usersSorted = users.sort((a: User, b: User) => {
    return b.points - a.points;
  })


  return (
    <div>
      {
        usersSorted.map((value, key) => {
          if (value.points >= 100) {
            if (value.points >= 100 && key === 0) {
              return <div><p>User: {value.username} The mais Brabo</p><p>Points: {value.points}</p></div>
            }
            return <div><p>User: {value.username} GodTier</p><p>Points: {value.points}</p></div>
          }
          else if (value.points >= 50 && value.points < 100) {
            return <div><p>User: {value.username} GoldTier</p><p>Points: {value.points}</p></div>
          }
          else {
            return <div><p>User: {value.username} LataoTier</p><p>Points: {value.points}</p></div>
          }
        })
      }
    </div>
  );
}

export default Rank;
