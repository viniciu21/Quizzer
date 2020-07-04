import React, { useContext } from 'react'; //Hooks
import { context } from '../context/contextAuth'; //contextAuth
import { Switch, Route, RouteProps, Redirect, withRouter } from 'react-router-dom';

//Components
import InicialPage from '../pages/InicialPage';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile/';
import ModifyUser from '../pages/ModifyUser';
import Quiz from '../pages/Quiz';
import Rank from '../pages/Rank';

import { CSSTransition, TransitionGroup } from 'react-transition-group';//For Transition pages
import history from '../history'; //History of our App.
import styled from 'styled-components'; //Styles of wrapper Component

interface props extends RouteProps { //Type for the route is private or not.
  isPrivate?: boolean
}

/**
 * This function checks if the user is logged in and if not
 * he is redirected to the login page.
 */
function CustomRoute({ isPrivate, ...rest }: props) {
  const { loading, isAuth } = useContext(context);

  //To allow time for our request, take the token and tell if the user is logged in or not.
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isPrivate && !isAuth) {
    return <Redirect to="/signin" />
  }

  return <Route {...rest} />;
}

/**
 * My routes, routes with the isPrivate attribute as true,
 * can only be accessed when the user is registered.
 */

const Routes = (): React.ReactElement => {
  return (
    <Wrapper>
      <TransitionGroup>
        <CSSTransition key={history.location.key} timeout={{ enter: 300, exit: 300 }} classNames={'fade'}>
          <Switch>
            <CustomRoute path="/" exact component={InicialPage} />
            <CustomRoute path="/signin" component={Signin} />
            <CustomRoute path="/signup" component={Signup} />
            <CustomRoute isPrivate={true} path="/profile" component={Profile} />
            <CustomRoute isPrivate={true} path="/modify" component={ModifyUser} />
            <CustomRoute isPrivate={true} path="/quiz" component={Quiz} />
            <CustomRoute isPrivate={true} path="/rank" component={Rank} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}

//Animation for react-transition group
const Wrapper = styled.div`
    .fade-enter {
        opacity: 0.01;
    }
    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 300ms ease-in;
    }
    .fade-exit {
        opacity: 1;
    }

    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 300ms ease-in;
    }
`;
export default withRouter(Routes);
//HOC for pass updated match, location, and history props to the wrapped component whenever it renders.
