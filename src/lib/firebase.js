import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyAL2JMn1N4MLBUxONFEcAWMnvhx3fD23jA',
  authDomain: 'netflix-a469e.firebaseapp.com',
  projectId: 'netflix-a469e',
  storageBucket: 'netflix-a469e.appspot.com',
  messagingSenderId: '471360814622',
  appId: '1:471360814622:web:c4ef70eb9ad3ac31e0780f'
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
