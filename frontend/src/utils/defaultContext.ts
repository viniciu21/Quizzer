import history from '../history';
import axios from 'axios';
import {FormEvent} from 'react';

export const defaultContext = {
    
    isAuth: undefined,
    loading: undefined,
    handleAuth: async(e:FormEvent, typeOfAuth: string, username: string, password: string) => {
        e.preventDefault();

        const {data: {token}} = await axios({
            baseURL: `http://localhost:3333/api/auth/${typeOfAuth}`,
            method: "POST",
            data:{ username, password},
        });
            
        localStorage.setItem('token', JSON.stringify(token));
    
        axios.defaults.headers.Auth =`Bearer ${token}`;
    
        history.push('/');
    },
    message:undefined
};