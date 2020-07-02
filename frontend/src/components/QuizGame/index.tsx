import React, { useContext, useState, useEffect } from 'react';

import { contextQuiz } from '../../context/contextQuiz';

import { context } from '../../context/contextAuth';

import { api } from '../../Api/api';
import history from '../../history';

// import { Container } from './styles';

const QuizGame: React.FC = () => {

  const { quizQuests, amount } = useContext(contextQuiz);

  const { userAuth } = useContext(context);

  const [index, setIndex] = useState(0);

  const [points, setPoints] = useState(0);

  const [counterMim, setCounterMim] = useState(5);

  const [counterSec, setCounterSec] = useState(59);

  const [overQuestionarie, setOverQuestionarie] = useState(false);

  const [answers, setAnswers] = useState<string[]>([]);

  const typeOfDifficulty = quizQuests.map(difficulty => difficulty.difficulty);

  const wrongQuests = quizQuests.map(wrong => wrong.incorrect_answers);

  const correctAnswer = quizQuests.map(correct => correct.correct_answer);

  const quests = quizQuests.map(quest => quest.question);

  useEffect(() => {
    if (index === parseInt(amount)) {
      setIndex(parseInt(amount) - 1)
      setOverQuestionarie(true);
      return;
    }
    if (overQuestionarie === false) {
      const answer = wrongQuests[index].map(value => value);
      answer.push(correctAnswer[index])
      const sortedAnswers = answer.sort(() => Math.random() - .5);
      setAnswers(sortedAnswers);
    }
    return;
  }, [index]);

  useEffect(() => {
    const TimeCounter = () => {
      if (counterMim === 0 && counterSec === 0) {
        setOverQuestionarie(true);
        return;
      }
      if (counterSec === 0) {
        setCounterMim(counterMim - 1);
        setCounterSec(60);
        return;
      }
      if (overQuestionarie === true) return;

      setCounterSec(counterSec - 1);
    }
    const interval = setInterval(TimeCounter, 1000);
    return () => clearInterval(interval);
  }, [counterMim, counterSec]);

  const handleQuestionAnswer = (value: string, index: number) => {
    if (counterMim === 0 && counterSec === 0) {
      setOverQuestionarie(true)
      return;
    }
    if (value === correctAnswer[index]) {
      console.log('Acertei', typeOfDifficulty[index])
      typeOfDifficulty[index] === 'hard' ?
        setPoints(points + 10) : typeOfDifficulty[index] === 'medium' ?
          setPoints(points + 5) : setPoints(points + 3);

      return setIndex(index + 1);
    } else {
      return setIndex(index + 1);
    }
  }

  const handleSave = async () => {
    try {
      await api.put('http://localhost:3333/api/auth/saveQuiz', {
        id: userAuth?.id,
        points: points,
        time: counterMim,
      });
      history.push('/profile');
    } catch (erro) {
      console.log(erro.response);
    }
  }

  return (
    <div>
      <div>
        <span>{counterMim} :</span>
        <span>{counterSec}</span>
        <p>{quests[index]}</p>
        <span>{index + 1} de : {amount}</span>
        <span>{typeOfDifficulty[index]}</span>
        {answers.map((value) => <button key={value}
          onClick={() => handleQuestionAnswer(value, index)}>{value}</button>)}
      </div>
      {
        overQuestionarie ?
          <div>
            <p>Sua pontuação foi de {points}, Parabens</p>
            <button onClick={() => handleSave()}>salvar</button>
          </div>
          : ''
      }
    </div>
  )
};

export default QuizGame;
