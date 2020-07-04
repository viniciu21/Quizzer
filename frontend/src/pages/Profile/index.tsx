import React, { useContext } from 'react'; //Hooks

import Table from '../../components/Table'; //For Table component

import { Link } from 'react-router-dom';

import { context } from '../../context/contextAuth'; //ContextAuth

import { ButtonsConteiner, Container } from './styles'; //Styles

const Profile: React.FC = () => {

  const { handleLogout } = useContext(context);
  //For function to logout;

  return (
    <Container>
      <Table />
      <ButtonsConteiner>
        <Link to="/" onClick={handleLogout}>
          <span>Logout</span>
        </Link>
        <Link to='/modify'>
          <span>Modify your user or delete it</span>
        </Link>
        <Link to='/quiz'>
          <span>Start a new Quiz</span>
        </Link>
        <Link to='/rank'>
          <span>View ranking</span>
        </Link>
      </ButtonsConteiner>
    </Container>
  );
}

export default Profile;
