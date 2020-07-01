import history from '../history';
import axios from 'axios';
import { FormEvent } from 'react';
import { Userctx } from '../context/contextAuth';

export const defaultContext: Userctx = {

  isAuth: undefined,
  loading: undefined,
  mensage: undefined,
  isSubmited: false,
  quizQuests: [],
  handleAuth: async (e: FormEvent, typeOfAuth: string, username: string, password: string) => {
    e.preventDefault();

    const { data: { token } } = await axios({
      baseURL: `http://localhost:3333/api/auth/${typeOfAuth}`,
      method: "POST",
      data: { username, password },
    });

    localStorage.setItem('token', JSON.stringify(token));

    axios.defaults.headers.Authorization = `Bearer ${token}`;

    history.push('/');
  },
  handleLogout: () => { },
  userAuth: {
    id: 0,
    username: '',
    password: '',
    points: 0
  },
  handleModify: async (e: FormEvent, username?: string, password?: string, id?: number) => {
    await axios({
      baseURL: "http://localhost:3333/api/auth/users",
      method: "PUT",
      params: { id },
      data: { username, password }
    })
  },
  handleDelete: async (e: FormEvent, id?: number) => {
    e.preventDefault();
    await axios({
      baseURL: `http://localhost:3333/api/auth/users/${id}`,
      method: "DELETE"
    });
  },
  handleQuiz: async () => {

  }
};
