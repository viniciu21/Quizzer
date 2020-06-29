import React, {createContext, useState, FormEvent, useEffect} from 'react';
// import { Container } from './styles';

import axios from 'axios';

import history from '../history';

import {defaultContext} from '../utils/defaultContext';

interface Userctx{
    isAuth?: boolean,
    loading?: boolean,
    handleAuth(event?:FormEvent, typeOfAuth?:string, username?: string, password?: string):Promise<void>,
    message?: string
}

export const context = createContext<Userctx>(defaultContext);

export const ContextProvider: React.FC = ({children}) => {

    const [isAuth, setIsauth] = useState(false);

    const [loading, setLoading] = useState(true);

    const [message, setMessage] = useState('qualquer coisa');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.defaults.headers.Auth= `Bearer ${JSON.parse(token)}`;
            setIsauth(true);
        }
        setLoading(false);
    },[]);

    if(loading){
        return <h1>loading</h1>
    }

    const handleAuth = async(e:FormEvent, typeOfAuth: string, username: string, password: string) => {
        e.preventDefault();
        try{
            const {data:{token}} = await axios({
                baseURL: `http://localhost:3333/api/auth/${typeOfAuth}`,
                method: "POST",
                data:{ username, password},
            });
            localStorage.setItem('token', JSON.stringify(token));
            setIsauth(true);
            axios.defaults.headers.Auth =`Bearer ${token}`;
            history.push('/profile');
        }catch(erro){
            console.log(erro.response);
            setMessage(erro.response.data.mensage);
        }            
    }

    return(
        <context.Provider value={{isAuth, loading, handleAuth, message}}>
            {children}
        </context.Provider>
    )
}
