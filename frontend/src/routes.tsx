import React from 'react';
import { Switch, Route } from 'react-router-dom';
import InicialPage from './pages/InicialPage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile/';


export default function Routes():React.ReactElement{
    return(
        <Switch>
            <Route path="/" exact component={InicialPage}/>
            <Route path="/signin" component={Signin}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/profile" component={Profile}/>
        </Switch>
    );
}