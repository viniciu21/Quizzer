import axios from 'axios';

export const api = axios.create(); //Axios instance for my api

export const quizApi = axios.create({ //Axios instance for Quizzapi
  baseURL: "https://opentdb.com/",
});
