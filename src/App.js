import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Browse from './pages/Browse';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

import * as ROUTES from './constants/routes';

function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
          exact
          >
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
          exact
          >
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute
          user={user}
          path={ROUTES.BROWSE}
          exact
          >
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
          exact
          >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
