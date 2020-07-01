import React, { useContext, useState, useEffect } from 'react';

import { contextQuiz } from '../../context/contextQuiz';

// import { Container } from './styles';

const QuizGame: React.FC = () => {

  const { quizQuests } = useContext(contextQuiz);

  const [index, setIndex] = useState(0);

  const [counterMim, setCounterMim] = useState(12);

  const [counterSec, setCounterSec] = useState(60);

  const TimeCounter = () => {
    setInterval(() => {
      if (counterSec === 0) {
        setCounterMim(counterMim - 1);
        setCounterSec(counterSec - 1);
        return;
      }
      setCounterSec(counterSec - 1);
    }, 1000);
  }

  useEffect(() => {
    TimeCounter()
  }, []);

  const quests = quizQuests.map(quest => quest.question);

  const correctAnswer = quizQuests.map(trueQuestions => trueQuestions.correct_answer);

  const wrongAnswer = quizQuests.map(wrongAnswer => wrongAnswer.incorrect_answers);

  const wrongOneAnswer = wrongAnswer[index].map(value => value);

  let answers = [correctAnswer[index]];

  wrongOneAnswer.map((value) => {
    return answers.push(value);
  })

  answers = answers.sort(() => Math.random() - .5);

  const handleQuestionAnswer = (value: string, index: number) => {
    console.log(value === correctAnswer[index]);
    value === correctAnswer[index] ? setIndex(index + 1) : setIndex(index + 1);
  }

  return (
    <div>
      <span>{counterMim}</span>
      <span>{counterSec}</span>
      <p>{quests[index]}</p> <span>{index + 1} de : {10}</span>
      {answers.map((value) => <button key={value} onClick={() => handleQuestionAnswer(value, index)}>{value}</button>)}
    </div>
  )
};

export default QuizGame;
