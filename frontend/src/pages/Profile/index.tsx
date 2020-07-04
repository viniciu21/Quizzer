import React, { useEffect, useState, useContext } from 'react';

import Table from '../../components/Table';

import { Link } from 'react-router-dom';

import { context } from '../../context/contextAuth';

import { ButtonsConteiner, Container } from './styles';

const Profile: React.FC = () => {

  const { handleLogout } = useContext(context);

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
