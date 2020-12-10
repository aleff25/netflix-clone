import React from 'react';
import JumbotronContainer from '../../containers/Jumbotron';
import FooterContainer from '../../containers/Footer';
import FaqsContainer from '../../containers/Faqs';

// import { Container } from './styles';

function Home() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

export default Home;
