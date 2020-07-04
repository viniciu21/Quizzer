import { Userctx } from '../context/types/types'; //Type of user context.

/**
 * The innitial value for ours state and function of context Auth.
 */

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
