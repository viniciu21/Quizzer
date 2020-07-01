import React, { useState, ChangeEvent, useContext } from 'react';
import QuizGame from '../../components/QuizGame';
import { context } from '../../context/contextAuth';
// import { Container } from './styles';

const Quiz: React.FC = () => {

  const [amount, setAmount] = useState('10');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [type, setType] = useState('');

  const { handleQuiz, isSubmited } = useContext(context);

  const onlyNumbers = (e: ChangeEvent<HTMLInputElement>) => {
    const numberInput = e.target.value.replace(/\D/, '');
    setAmount(numberInput);
  }

  return (
    <div>
      <h1>Comece um novo quiz </h1>
      <p>Você Terá 12 minutos para completa-lo</p>
      <p>Quanto mais repostas certas melhor será sua pontuação </p>
      <p>Crie seu quiz</p>
      {
        isSubmited ? <QuizGame /> :
          <form onSubmit={(e) => handleQuiz(e, category, amount, difficulty, type)}>
            <input type="text" name="amount" placeholder="Quantidade de questões"
              value={amount} onChange={(e) => onlyNumbers(e)} />
            <br />
            <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
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
            <br />
            <select name="difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
              <option value="">Any Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <br />
            <select name="type" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">Any Type</option>
              <option value="multiple">Multiple Choice</option>
              <option value="boolean">True / False</option>
            </select>
            <br />
            <button type="submit">Começar game </button>
          </form>
      }
    </div>
  );
}

export default Quiz;
