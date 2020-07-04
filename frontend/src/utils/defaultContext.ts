import history from '../history';
import axios from 'axios';
import { FormEvent } from 'react';
import { Userctx } from '../context/contextAuth';

export const defaultContext: Userctx = {

  isAuth: undefined,
  loading: undefined,
  mensage: undefined,
  handleAuth: async () => { },
  handleLogout: () => { },
  userAuth: {
    id: 0,
    username: 'TestUser',
    password: '',
    points: 0,
    time: 0,
    hard: 0,
    medium: 0,
    easy: 0,
  },
  handleModify: async () => { },
  handleDelete: async () => { },
};
