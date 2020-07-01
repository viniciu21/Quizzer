import React, { useContext } from 'react';

import { context } from '../../context/contextAuth';

// import { Container } from './styles';

const QuizGame: React.FC = () => {

  const { quizQuests } = useContext(context);

  const incorrectAnswers = quizQuests.map((quest) => {
    return quest.incorrect_answers;
  })

  console.log(quizQuests);

  const correctAnswers = quizQuests.map((quest) => {
    return quest.correct_answer;
  })

  const quest = quizQuests.map((quest) => {
    return quest.question;
  })

  const GenerateQuest = () => {
    const button = React.createElement('button');
    return <button />;
  }

  return (
    <div>
      {GenerateQuest}
    </div>
  )
};

export default QuizGame;
