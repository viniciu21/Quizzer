import React, { useContext, useState, useEffect } from 'react'; //hooks

import { contextQuiz } from '../../context/contextQuiz';

import { context } from '../../context/contextAuth';

import { api } from '../../Api/api'; //Instance for Auth api
import history from '../../history'; //History routes

import { Container, GameContainer, TextInfoContainer, QuestButtom, SaveContainer } from './styles';
//Styles.

interface Props { //Props to left time of quiz
  timeDefault: number;
};

const QuizGame = ({ timeDefault }: Props) => {

  const { quizQuests, amount, SetSubmited } = useContext(contextQuiz);
  // For state and function of context.

  const { userAuth } = useContext(context);
  // For user loged.

  const [index, setIndex] = useState(0);
  // For question index.

  const [points, setPoints] = useState(0);
  // Points of user

  const [counterMim, setCounterMim] = useState(timeDefault - 1);

  const [counterSec, setCounterSec] = useState(59);

  const [overQuestionarie, setOverQuestionarie] = useState(false);
  // For if the questionarie is over.

  const [answers, setAnswers] = useState<string[]>([]);
  // Quests of questionarie

  const [counterDif, setCounterDif] = useState({ hard: 0, medium: 0, easy: 0, });
  // Questions by difficulty.

  const typeOfDifficulty = quizQuests.map(difficulty => difficulty.difficulty);
  // Type of difficulty by question.

  const wrongQuests = quizQuests.map(wrong => wrong.incorrect_answers);

  const correctAnswer = quizQuests.map(correct => correct.correct_answer);

  const quests = quizQuests.map(quest => quest.question.replace(/&.+?;/g, ' '));
  // Quests of the game, o replace vai corrigir o erro do json que vem da api com alguns &quots; .

  /*
  * This useEffect will set the index for the next question
  * if the time is not over or the questions are not over
  */
  useEffect(() => {
    if (index === parseInt(amount)) {
      setIndex(parseInt(amount) - 1)
      setOverQuestionarie(true);
      return;
    }
    if (overQuestionarie === false) {
      const answer = wrongQuests[index].map(value => value.replace(/&.+?;/g, 'lala'));
      answer.push(correctAnswer[index].replace(/&.+?;/g, 'lala'));
      const sortedAnswers = answer.sort(() => Math.random() - .5);
      setAnswers(sortedAnswers);
    }
    return;
  }, [index]);

  /**
  * This useEffect is our counter.
  */

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

  /**
   *  This function will add the score for the difficulty of
   * the question and add to the difficult counter, and then
   * call the next question,
   */

  const handleQuestionAnswer = (value: string, index: number) => {
    if ((counterMim === 0 && counterSec === 0) || (index === parseInt(amount) - 1)) {
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

  /**
   * This question will save our points into user in database,
   * and then redirect the user to profile page.
   */

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
      SetSubmited();
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
        {answers.map((value) =>
          <QuestButtom key={value} onClick={() => handleQuestionAnswer(value, index)}>{value}
          </QuestButtom>)
        }
      </GameContainer>
      {
        overQuestionarie ?
          <SaveContainer>
            <p>His score was {points}, congratulations</p>
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
