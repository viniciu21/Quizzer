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
}

//usersSorted.map((value, key) => {
  //   if (value.points >= 100) {
  //     if (value.points >= 100 && key === 0) {
  //       return <div><p>User: {value.username} The mais Brabo</p><p>Points: {value.points}</p></div>
  //     }
  //     return <div><p>User: {value.username} GodTier</p><p>Points: {value.points}</p></div>
  //   }
  //   else if (value.points >= 50 && value.points < 100) {
  //     return <div><p>User: {value.username} GoldTier</p><p>Points: {value.points}</p></div>
  //   }
  //   else {
  //     return <div><p>User: {value.username} LataoTier</p><p>Points: {value.points}</p></div>
  //   }
