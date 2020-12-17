import React, { useState } from 'react';
import HeaderContainer from '../../containers/Header';
import FooterContainer from '../../containers/Footer';

import Form from '../../components/Form';

// import { Container } from './styles';

function SignIn() {
  const [emailAddres, setEmailAddress] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddres === '';
  const handleSignin = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST" >
            <Form.Input
              placeholder="Email Adress"
              value={emailAddres}
              onChange={ ({ target }) => setEmailAddress(target.value)}
              />

            <Form.Input
              type="password"
              placeholder="Password"
              value={password}
              autoComplete="off"
              onChange={ ({ target }) => setPassword(target.value)}
              />

            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

export default SignIn;
