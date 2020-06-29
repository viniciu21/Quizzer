import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './history';
import { ContextProvider } from './context/contextAuth';

function App(){
    return (
        <ContextProvider>
            <Router history={history}>
                <Routes/>
            </Router>
        </ContextProvider>
  )
}

export {App};
