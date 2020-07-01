import React,{useContext} from 'react';
import { context } from '../context/contextAuth';
import { Switch, Route, RouteProps, Redirect } from 'react-router-dom';
import InicialPage from '../pages/InicialPage';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile/';
import ModifyUser from '../pages/ModifyUser';
import Quiz from '../pages/Quiz';

interface props extends RouteProps{
    isPrivate?: boolean
}

function CustomRoute({ isPrivate, ...rest }:props) {
    const { loading, isAuth } = useContext(context);
  
    if (loading) {
      return <h1>Loading...</h1>;
    }
  
    if (isPrivate && !isAuth) {
      return <Redirect to="/signin" />
    }
  
    return <Route {...rest} />;
}

export default function Routes():React.ReactElement{
    return(
        <Switch>
            <CustomRoute path="/" exact component={InicialPage}/>
            <CustomRoute path="/signin" component={Signin}/>
            <CustomRoute path="/signup" component={Signup}/>
            <CustomRoute isPrivate={true} path="/profile" component={Profile}/>
            <CustomRoute isPrivate={true} path= "/modify" component={ModifyUser}/>
            <CustomRoute isPrivate={true} path= "/quiz" component={Quiz}/>
        </Switch>
    );
}