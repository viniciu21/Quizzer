import React, { createContext, useState, FormEvent, useEffect } from 'react';
// import { Container } from './styles';


import { api } from '../Api/api';

import history from '../history';

import { defaultContext } from '../utils/defaultContext';

export interface User {
  id: number,
  username: string,
  password: string,
  points: number,
  time: number,
  hard: number,
  medium: number,
  easy: number,
}

export interface Quests {
  category: string,
  type: string,
  question: string,
  correct_answer: string,
  incorrect_answers: Array<string>
}

export interface Userctx {
  isAuth?: boolean,
  loading?: boolean,
  mensage?: string,
  userAuth?: User,
  handleAuth(event?: FormEvent, typeOfAuth?: string, username?: string, password?: string): Promise<void>,
  handleLogout(): void,
  handleModify(event?: FormEvent, username?: string, password?: string, id?: number): Promise<void>,
  handleDelete(event?: FormEvent, id?: number): Promise<void>,

}

export const context = createContext<Userctx>(defaultContext);

export const ContextProvider: React.FC = ({ children }) => {

  const [isAuth, setIsauth] = useState(false);

  const [loading, setLoading] = useState(true);

  const [mensage, setMensage] = useState(undefined);

  const [userAuth, setUserAuth] = useState<User>();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setIsauth(true);
    }
    setLoading(false);
    (async () => {
      const { data } = await api.get('http://localhost:3333/api/auth/profile')
      setUserAuth(data)
    })()
  }, []);

  const handleAuth = async (e: FormEvent, typeOfAuth: string, username: string, password: string) => {
    e.preventDefault();
    try {
      const { data, data: { token } } = await api({
        baseURL: `http://localhost:3333/api/auth/${typeOfAuth}`,
        method: "POST",
        data: { username, password },
      });
      localStorage.setItem('token', JSON.stringify(token));

      setIsauth(true);

      api.defaults.headers.Authorization = `Bearer ${token}`;

      setUserAuth(data.user);

      setMensage(undefined);

      history.push('/profile');

    } catch (erro) {
      setMensage(erro.response.data.mensage);
    }
  }

  const handleModify = async (e: FormEvent, username?: string, password?: string, id?: number) => {
    e.preventDefault();
    try {
      await api({
        baseURL: `http://localhost:3333/api/auth/users/${id}`,
        method: "PUT",
        data: { username, password }
      });
      handleLogout();
    } catch (erro) {
      console.log(erro.response.data.mensage);
    }
    handleLogout();
  }

  const handleDelete = async (e: FormEvent, id?: number) => {
    e.preventDefault();
    try {
      await api({
        baseURL: `http://localhost:3333/api/auth/users/${id}`,
        method: "DELETE"
      });
      handleLogout();
    } catch (erro) {
      setMensage(erro.response.data.mensage);
    }
  }


  const handleLogout = () => {
    setIsauth(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('/');
  }

  return (
    <context.Provider value={{
      isAuth, loading, handleAuth,
      mensage, handleLogout, userAuth,
      handleModify, handleDelete,
    }}>
      {children}
    </context.Provider>
  )
};
