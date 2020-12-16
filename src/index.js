import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import { GlobalStyles } from './global-styles';
import App from './app';
import { firebase } from './lib/firebase';
import { FirebaseContext } from './context/firebase';

render(
  <React.StrictMode>
    <>
      <FirebaseContext.Provider valur={{ firebase }}>
        <GlobalStyles />
        <App />
      </FirebaseContext.Provider>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
