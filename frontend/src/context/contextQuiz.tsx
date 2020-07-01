import React, { createContext, useState, FormEvent, ChangeEvent } from 'react';

import { defaultQuizContext } from '../utils/defaultQuizContext';

import { quizApi } from '../Api/api';

export interface Quizctx {
  isSubmited?: Boolean,
  quizQuests: Quests[],
  amount: string,
  difficulty: string,
  handleQuiz(event: FormEvent, category: string, amount: string, difficulty: string, type: string): Promise<void>,
  onlyNumbers(e: ChangeEvent<HTMLInputElement>): void,
  handleDifficulty(e: ChangeEvent<HTMLSelectElement>): void,
}

export interface Quests {
  category: string,
  type: string,
  question: string,
  correct_answer: string,
  incorrect_answers: Array<string>
}

export const contextQuiz = createContext(defaultQuizContext);

export const ContextQuizProvider: React.FC = ({ children }) => {

  const [quizQuests, setQuizQuests] = useState<Quests[]>([]);

  const [isSubmited, setIsSubmited] = useState(false);

  const [amount, setAmount] = useState('10');

  const [difficulty, setDifficulty] = useState('');


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

  const onlyNumbers = (e: ChangeEvent<HTMLInputElement>) => {
    const numberInput = e.target.value.replace(/\D/, '');
    setAmount(numberInput);
  }

  const handleDifficulty = (e: ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(e.target.value);
  }

  return (
    <contextQuiz.Provider value={{
      quizQuests, isSubmited, handleQuiz,
      onlyNumbers, amount, difficulty, handleDifficulty
    }}>
      {children}
    </contextQuiz.Provider>
  )
}
