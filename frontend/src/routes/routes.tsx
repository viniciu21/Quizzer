import React, { useContext } from 'react';
import { context } from '../context/contextAuth';
import { Switch, Route, RouteProps, Redirect, withRouter } from 'react-router-dom';
import InicialPage from '../pages/InicialPage';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile/';
import ModifyUser from '../pages/ModifyUser';
import Quiz from '../pages/Quiz';
import Rank from '../pages/Rank';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import history from '../history';
import styled from 'styled-components';

interface props extends RouteProps {
  isPrivate?: boolean
}

function CustomRoute({ isPrivate, ...rest }: props) {
  const { loading, isAuth } = useContext(context);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isPrivate && !isAuth) {
    return <Redirect to="/signin" />
  }

  return <Route {...rest} />;
}

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
