import React, { createContext, useState, FormEvent, useEffect } from 'react';
// import { Container } from './styles';


import { api, quizApi } from '../Api/api';

import history from '../history';

import { defaultContext } from '../utils/defaultContext';

export interface User {
  id?: number,
  username?: string,
  password?: string,
  points?: number,
}

export interface Quests {
  category: string,
  type: string,
  question: string,
  correct_answer: string,
  incorrect_answers: string[]
}

export interface Userctx {
  isAuth?: boolean,
  loading?: boolean,
  mensage?: string,
  userAuth?: User,
  isSubmited?: Boolean,
  quizQuests: Quests[],
  handleAuth(event?: FormEvent, typeOfAuth?: string, username?: string, password?: string): Promise<void>,
  handleLogout(): void,
  handleModify(event?: FormEvent, username?: string, password?: string, id?: number): Promise<void>,
  handleDelete(event?: FormEvent, id?: number): Promise<void>,
  handleQuiz(event: FormEvent, category: string, amount: string, difficulty: string, type: string): Promise<void>,

}

export const context = createContext<Userctx>(defaultContext);

export const ContextProvider: React.FC = ({ children }) => {

  const [isAuth, setIsauth] = useState(false);

  const [loading, setLoading] = useState(true);

  const [mensage, setMensage] = useState(undefined);

  const [userAuth, setUserAuth] = useState();

  const [isSubmited, setIsSubmited] = useState(false);

  const [quizQuests, setQuizQuests] = useState<Quests[]>([]);


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setIsauth(true);
    }
    setLoading(false);
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

  const handleQuiz = async (e: FormEvent, category: string, amount: string, difficulty: string, type: string) => {
    const chefParams = {
      category,
      difficulty,
      type
    }

    const params: object = Object.assign({ amount },
      chefParams.category !== '' ? { category: chefParams.category } : {},
      chefParams.difficulty !== '' ? { difficulty: chefParams.difficulty } : {},
      chefParams.type !== '' ? { type: chefParams.type } : {},
    )

    e.preventDefault();

    try {
      const { data: { results } } = await quizApi.get('api.php', {
        params: params
      });
      setQuizQuests(results);
      setIsSubmited(true);
    } catch (erro) {
      console.log(erro);
    }
  }

  return (
    <context.Provider value={{
      isAuth, loading, isSubmited, handleAuth,
      mensage, handleLogout, userAuth, quizQuests,
      handleModify, handleDelete, handleQuiz
    }}>
      {children}
    </context.Provider>
  )
};
