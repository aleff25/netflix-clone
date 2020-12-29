import React from 'react';
import Header from '../../components/Header';
import Profiles from '../../components/Profiles';
import * as ROUTES from '../../constants/routes';
import logo from '../../logo.svg';

function ProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User>
            <Profiles.Picture src={user.photoUrl} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}

export default ProfileContainer;
