import firebase from 'firebase/app';
import 'firebase/auth';
import renderToDom from './renderToDom';
import renderHomePage from '../pages/renderHomePage';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
  renderHomePage();
  // renderToDom('#app', 'You are now logged in!');
};

const signOut = () => {
  firebase.auth().signOut();
  renderToDom('#app', '');
};

export { signIn, signOut };
