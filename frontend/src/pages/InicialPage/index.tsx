import React from 'react';

import Svg from '../../components/Svg'; //For svg component

import { EntradeButtons, ButtonsContainer } from './styles'; //Styles

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
