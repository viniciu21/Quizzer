import React, { createContext, useState, FormEvent, useEffect } from 'react';
//For hooks and types of React

import { api } from '../Api/api';
//Axios api instance for my database.

import history from '../history';
//History for my routes.

import { defaultContext } from '../utils/defaultContext';
//The context default for my context provider.

import { User, Userctx } from './types/types';
//Types of user and Usercontext

export const context = createContext<Userctx>(defaultContext);
//Instance of my context.

export const ContextProvider: React.FC = ({ children }) => {

  const [isAuth, setIsauth] = useState(false); //helps to see that the user is logged in

  const [loading, setLoading] = useState(true); //the boolean that helps with loading time

  const [mensage, setMensage] = useState(undefined); //The mensage of failure.

  const [userAuth, setUserAuth] = useState<User>(); //Here is a data of user.

  /**
   * This useEffec will get the user's token if it exists in the localstorage
   * and in the defaults headers of my axios instance and call the anonymous
   * function that will take the user's data from the backend.
   */

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

  /**
   * This function will log in or register the user in the app
   * and set the default header for the token that is sent by the backend.
   */

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

  /**
   * This function will modify the user by passing the data used in the form of the /modify page
   */

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

  /**
   * This function will delete the user in /modify page;
   */

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

  /**
   * This function will logout the user and delete this token from localstorage
   */
  const handleLogout = () => {
    setIsauth(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('/');
  }

  return (
    //This is the provider that passing the values to the others pages
    <context.Provider value={{
      isAuth, loading, handleAuth,
      mensage, handleLogout, userAuth,
      handleModify, handleDelete,
    }}>
      {children}
    </context.Provider>
  )
};
