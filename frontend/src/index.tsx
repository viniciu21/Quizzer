import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Global } from './styles/Global'; //Global styles.


ReactDOM.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
