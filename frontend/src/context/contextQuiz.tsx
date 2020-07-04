import React, { createContext, useState, FormEvent, ChangeEvent } from 'react';
//For hooks and types of React

import { defaultQuizContext } from '../utils/defaultQuizContext';
//The context default for my context provider.

import { quizApi } from '../Api/api';
//Axios api instance for my QuizzApi.

import { Quests } from './types/types';
//The type of quests

export const contextQuiz = createContext(defaultQuizContext);
//Instace of Context for quizzApp.

export const ContextQuizProvider: React.FC = ({ children }) => {

  const [quizQuests, setQuizQuests] = useState<Quests[]>([]);//QUests geted for quizAPi

  const [isSubmited, setIsSubmited] = useState(false);
  //That helps me to know if the question form was submitted.

  const [amount, setAmount] = useState('10');
  //Number of questions to look for

  const [difficulty, setDifficulty] = useState('');
  //Difficulty of questions;

  /**
   * This function just set the submited bool for false;
   */
  const SetSubmited = () => {
    setIsSubmited(false);
  }

  /**
   * This function takes the parameters of the form and looks if they are empty,
   * to put or not in the request of the questions and set the questions for data recived.
   */

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

  /**
   * This function lets only numbers enter the amount.
  */

  const onlyNumbers = (e: ChangeEvent<HTMLInputElement>) => {
    const numberInput = e.target.value.replace(/\D/, '');
    setAmount(numberInput);
  }

  /**
   * This function set the difficulty.
  */

  const handleDifficulty = (e: ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(e.target.value);
  }

  return (
    //This is the provider that passing the values to the others pages.
    <contextQuiz.Provider value={{
      quizQuests, isSubmited, handleQuiz,
      onlyNumbers, amount, difficulty, handleDifficulty,
      SetSubmited
    }}>
      {children}
    </contextQuiz.Provider>
  )
}
