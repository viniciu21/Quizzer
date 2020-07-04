import React from 'react';

import { Router } from 'react-router-dom'; //For routing pages

import Routes from './routes/routes'; //Pages that will serve the routes

import history from './history'; //History for pages.

import { ContextProvider } from './context/contextAuth'; //Context Auth.

import { ContextQuizProvider } from './context/contextQuiz'; //Context Quiz.


function App() {
  return (
    <ContextQuizProvider>
      <ContextProvider>
        <Router history={history}>
          <Routes />
        </Router>
      </ContextProvider>
    </ContextQuizProvider>
  )
}

export default App;
