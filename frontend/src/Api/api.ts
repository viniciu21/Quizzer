import axios from 'axios';

export const api = axios.create();

export const quizApi = axios.create({
    baseURL: "https://opentdb.com/",
});