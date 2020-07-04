import { FormEvent, ChangeEvent } from 'react';

/**
 * Here are all the types of data used in the contexts.
 */

export interface User { //Users for one user, the same of backend entity
  id: number,
  username: string,
  password: string,
  points: number,
  time: number,
  hard: number,
  medium: number,
  easy: number,
};

export interface Quests { //The quests of apiQuest
  category: string,
  type: string,
  question: string,
  correct_answer: string,
  incorrect_answers: Array<string>
};

export interface Userctx { //The type functions and states of users
  isAuth?: boolean,
  loading?: boolean,
  mensage?: string,
  userAuth?: User,
  handleAuth(event?: FormEvent, typeOfAuth?: string, username?: string, password?: string): Promise<void>,
  handleLogout(): void,
  handleModify(event?: FormEvent, username?: string, password?: string, id?: number): Promise<void>,
  handleDelete(event?: FormEvent, id?: number): Promise<void>,
};


export interface Quizctx { //The type of functions and states of quiz
  isSubmited?: Boolean,
  quizQuests: Quests[],
  amount: string,
  difficulty: string,
  handleQuiz(event: FormEvent, category: string, amount: string, difficulty: string, type: string): Promise<void>,
  onlyNumbers(e: ChangeEvent<HTMLInputElement>): void,
  handleDifficulty(e: ChangeEvent<HTMLSelectElement>): void,
  SetSubmited(): void;
};

export interface Quests { //The type of quiz
  category: string,
  type: string,
  question: string,
  difficulty: string,
  correct_answer: string,
  incorrect_answers: Array<string>
};
