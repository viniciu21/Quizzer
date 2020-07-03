import styled, { keyframes } from 'styled-components';

import { Link } from 'react-router-dom';


export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const EntradeButtons = styled(Link)`
    background: #bbff00;
    color: #1d1d1d;
    cursor: pointer;
    font-size: 1.5em;
    padding: 1.0rem;
    /* border: 0; */
    transition: all 0.5s;
    border-radius: 10px;
    /* width: auto; */
    position: relative;
    min-width: 100px;
    margin-left: 10px;
    &::after {
        content: "😎";
        position: absolute;
        left: 80%;
        top: 54%;
        right: 0;
        bottom: 0;
        opacity: 0;
        transform: translate(-50%, -50%);
  }
  &:hover {
      background: #2b2bff;
      transition: all 0.5s;
      border-radius: 10px;
      box-shadow: 0px 6px 15px #0000ff61;
      padding: 1.5rem 3rem 1.5rem 1.5rem;
      color: #ffffff;
      &::after {
          opacity: 1;
          transition: all 0.5s;
          color: #ffffff;
        }
    }

`
