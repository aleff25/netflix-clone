import React from 'react';
import Header from '../../components/Header';

import logo from '../../logo.svg';

import * as ROUTES from '../../constants/routes';

function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
        <Header.Button to={ROUTES.SIGN_IN}>Sign In </Header.Button>
      </Header.Frame>
      { children }
    </Header>
  );
}

export default HeaderContainer;
