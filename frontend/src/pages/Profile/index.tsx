import React, { useEffect, useState } from 'react';

import axios from 'axios';

// import { Container } from './styles';

interface User{
    id: number,
    username: string,
    password: string,
    points: number
}

const Profile: React.FC = () => {

    const [users, setUsers] = useState<[User]>();

    useEffect(() =>{
        (async () => {
            const users = await axios({
                baseURL: 'http://localhost:3333/api/auth/users',
                method: "GET",
            })
            console.log(users.data);
            setUsers(users.data);
        })()
    },[])
  return (
  <h1>{users && users[0].username}</h1>
  );
}

export default Profile;