import React from 'react';

import './svg.css';

// import { Container } from './styles';

const Svg: React.FC = () => {
  return (
    <svg>
      <symbol id="s-text">
        <text text-anchor="middle" x="50%" y="80%">Quizzer</text>
      </symbol>
      <g className="g-ants">
        <use xlinkHref="#s-text" className="text-copy"></use>
        <use xlinkHref="#s-text" className="text-copy"></use>
        <use xlinkHref="#s-text" className="text-copy"></use>
        <use xlinkHref="#s-text" className="text-copy"></use>
        <use xlinkHref="#s-text" className="text-copy"></use>
      </g>
    </svg>
  );
}

export default Svg;
