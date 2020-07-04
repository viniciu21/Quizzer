import { Quizctx } from '../context/contextQuiz';

import { ChangeEvent } from 'react';

export const defaultQuizContext: Quizctx = {
  isSubmited: false,
  quizQuests: [],
  amount: '10',
  difficulty: '',
  handleQuiz: async () => { },
  onlyNumbers: () => { },
  handleDifficulty: (event: ChangeEvent<HTMLSelectElement>) => { },
  SetSubmited: () => { },
}
