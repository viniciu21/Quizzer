import { Quizctx } from '../context/types/types'; //Type of user context.

import { ChangeEvent } from 'react'; //Type of input change event.

/**
 * The innitial value for ours state and function of context Quiz.
 */

export const defaultQuizContext: Quizctx = {
  isSubmited: false,
  quizQuests: [],
  amount: '10',
  difficulty: '',
  handleQuiz: async () => { },
  onlyNumbers: () => { },
  handleDifficulty: (event: ChangeEvent<HTMLSelectElement>) => { },
  SetSubmited: () => { },
};
