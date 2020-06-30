import React, { useEffect, useState, useContext } from 'react';

import axios from 'axios';

import { context } from '../../context/contextAuth';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

interface User{
    id: number,
    username: string,
    password: string,
    points: number
}

const Profile: React.FC = () => {

    const [user, setUser] = useState<User>();

    const {handleLogout} = useContext(context);

    useEffect(() =>{
        (async () => {
            const user = await axios({
                baseURL: 'http://localhost:3333/api/auth/profile',
                method: "GET",
            })
            console.log(user.data);
            setUser(user.data);
        })()
    },[])
  return (
    <div>
        <div>
            <h1>ID :{user?.id}</h1>
            <h1>USERNAME: {user?.username}</h1>
            <h1>Points: {user?.points}</h1>
        </div>
        <button onClick={handleLogout}>Logout</button>
        <Link to='/settings'>Modificar Usuário</Link>
    </div>
    
  );
}

export default Profile;