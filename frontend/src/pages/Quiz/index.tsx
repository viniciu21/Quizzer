import React, { useState, useContext, useEffect } from 'react';
import QuizGame from '../../components/QuizGame';
import { contextQuiz } from '../../context/contextQuiz';
import { Container, TutorialGame, QuizzerContainer, ButtomSubmit, ContainerQuizer } from './styles';

const Quiz: React.FC = () => {

  const [category, setCategory] = useState('');
  const [type, setType] = useState('');


  const {
    handleQuiz,
    isSubmited,
    amount,
    onlyNumbers,
    difficulty,
    handleDifficulty } = useContext(contextQuiz);

  const timeDefault = 12 * Math.floor(parseInt(amount) / 10) || 12;

  return (
    <Container>
      {
        isSubmited ? <QuizGame timeDefault={timeDefault} /> :
          <ContainerQuizer>
            <TutorialGame>
              <h1>Start a new Quiz </h1>
              <p>You will have {timeDefault} minutes to complete it</p>
              <p>The more certain answers the better your score will be, the difficulty also counts for the score</p>
            </TutorialGame>
            <QuizzerContainer>
              <form onSubmit={(e) => handleQuiz(e, category, amount, difficulty, type)}>
                <input type="text" name="amount" placeholder="Number of questions"
                  value={amount} onChange={(e) => onlyNumbers(e)} />
                <select name="Category" value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="">Any Category</option>
                  <option value="9">General Knowledge</option>
                  <option value="10">Entertainment: Books</option>
                  <option value="11">Entertainment: Film</option>
                  <option value="12">Entertainment: Music</option>
                  <option value="13">Entertainment: Musicals &amp; Theatres</option>
                  <option value="14">Entertainment: Television</option>
                  <option value="15">Entertainment: Video Games</option>
                  <option value="16">Entertainment: Board Games</option>
                  <option value="17">Science &amp; Nature</option>
                  <option value="18">Science: Computers</option>
                  <option value="19">Science: Mathematics</option>
                  <option value="20">Mythology</option>
                  <option value="21">Sports</option>
                  <option value="22">Geography</option>
                  <option value="23">History</option>
                  <option value="24">Politics</option>
                  <option value="25">Art</option>
                  <option value="26">Celebrities</option>
                  <option value="27">Animals</option>
                  <option value="28">Vehicles</option>
                  <option value="29">Entertainment: Comics</option>
                  <option value="30">Science: Gadgets</option>
                  <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                  <option value="32">Entertainment: Cartoon &amp; Animations</option>
                </select>
                <select name="Difficulty" value={difficulty} onChange={(e) => handleDifficulty(e)}>
                  <option value="">Any Difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
                <select name="Type" value={type} onChange={(e) => setType(e.target.value)}>
                  <option value="">Any Type</option>
                  <option value="multiple">Multiple Choice</option>
                  <option value="boolean">True / False</option>
                </select>
                <ButtomSubmit type="submit">Start Quiz</ButtomSubmit>
              </form>
            </QuizzerContainer>
          </ContainerQuizer>
      }
    </Container>
  );
}

export default Quiz;
