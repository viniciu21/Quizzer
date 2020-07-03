import React from 'react';

import Svg from './svg';

import { Link } from 'react-router-dom';

import { EntradeButtons, ButtonsContainer } from './styles';

const InicialPage = () => {
  return (
    <div>
      <Svg />
      <ButtonsContainer>
        <EntradeButtons to="/signin"> Signin</EntradeButtons>
        <EntradeButtons to="/signup"> Signup</EntradeButtons>
      </ButtonsContainer>
    </div>
  )
}

export default InicialPage;
