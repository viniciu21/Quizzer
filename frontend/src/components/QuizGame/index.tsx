import React, { useContext, useState, useEffect } from 'react';

import { contextQuiz } from '../../context/contextQuiz';

import { context } from '../../context/contextAuth';

import { api } from '../../Api/api';
import history from '../../history';

import { Container, GameContainer, TextInfoContainer, QuestButtom, SaveContainer } from './styles';

interface Props {
  timeDefault: number;
}

const QuizGame = ({ timeDefault }: Props) => {

  const { quizQuests, amount } = useContext(contextQuiz);

  const { userAuth } = useContext(context);

  const [index, setIndex] = useState(0);

  const [points, setPoints] = useState(0);

  const [counterMim, setCounterMim] = useState(timeDefault - 1);

  const [counterSec, setCounterSec] = useState(59);

  const [overQuestionarie, setOverQuestionarie] = useState(false);

  const [answers, setAnswers] = useState<string[]>([]);

  const [counterDif, setCounterDif] = useState({ hard: 0, medium: 0, easy: 0, });

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
    if (counterMim === 0 && counterSec === 0 || index === parseInt(amount) - 1) {
      setOverQuestionarie(true);
      return;
    }
    if (value === correctAnswer[index]) {
      if (typeOfDifficulty[index] === 'hard') {
        setPoints(points + 10);
        setCounterDif({
          hard: counterDif.hard + 1,
          medium: counterDif.medium,
          easy: counterDif.easy,
        })
      }
      else if (typeOfDifficulty[index] === 'medium') {
        setPoints(points + 5);
        setCounterDif({
          hard: counterDif.hard,
          medium: counterDif.medium + 1,
          easy: counterDif.easy
        })
      }
      else {
        setPoints(points + 5);
        setCounterDif({
          hard: counterDif.hard,
          medium: counterDif.medium,
          easy: counterDif.easy + 1
        })
      }
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
        hard: counterDif.hard,
        medium: counterDif.medium,
        easy: counterDif.easy,
      });
      history.push('/profile');
    } catch (erro) {
      history.push('/profile');
    }
  }

  return (
    <Container>
      <GameContainer>
        <TextInfoContainer>
          <p>Time Left {counterMim}: {counterSec}</p>
          <p>Your Points {points}</p>
          <p>Category : {quizQuests[index].category}</p>
          <p>Question {index + 1} of : {amount} with difficulty {typeOfDifficulty[index]}:</p>
          <p>{quests[index]} </p>
        </TextInfoContainer>
        {answers.map((value) => <QuestButtom key={value}
          onClick={() => handleQuestionAnswer(value, index)}>{value}</QuestButtom>)}
      </GameContainer>
      {
        overQuestionarie ?
          <SaveContainer>
            <p>Sua pontuação foi de {points}, Parabens</p>
            <p>
              You answer {counterDif.hard} : hard, {counterDif.medium} medium and {counterDif.easy} easy Quests
            </p>
            <p>Go check your position in rank</p>
            <button onClick={() => handleSave()}>salvar</button>
          </SaveContainer>
          : ''
      }
    </Container>
  )
};

export default QuizGame;
