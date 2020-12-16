import React from 'react';
import JumbotronContainer from '../../containers/Jumbotron';
import FooterContainer from '../../containers/Footer';
import FaqsContainer from '../../containers/Faqs';
import HeaderContainer from '../../containers/Header';

import OptForm from '../../components/Opt-form';
import Feature from '../../components/Feature';

function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimented films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time;
          </Feature.SubTitle>

          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

export default Home;
