import React from 'react';
import { Router, BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import history from './history';
import { ContextProvider } from './context/contextAuth';
import { ContextQuizProvider } from './context/contextQuiz';
import { Global } from './styles/Global';

function App() {
  return (
    <ContextQuizProvider>
      <ContextProvider>
        <Router history={history}>
          <Routes />
        </Router>
        <Global />
      </ContextProvider>
    </ContextQuizProvider>
  )
}

export { App };
