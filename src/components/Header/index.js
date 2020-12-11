import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import {
  Background, Container, Logo, ButtonLink
} from './styles';

function Header({ background = true, children, ...rest }) {
  return (
    background ? <Background {...rest}>{ children }</Background>
      : children
  );
}

Header.Button = function HeaderButton({ children, ...rest }) {
  return (
    <ButtonLink {...rest}>
      { children }
    </ButtonLink>
  );
};

Header.Frame = function HeaderFrame({ children, ...rest }) {
  return (
    <Container {...rest}>
      { children }
    </Container>
  );
};

Header.Logo = function HeaderLogo({ to, ...rest }) {
  return (
    <ReactRouterLink to={to}>
      <Logo { ...rest } />
    </ReactRouterLink>
  );
};

export default Header;
