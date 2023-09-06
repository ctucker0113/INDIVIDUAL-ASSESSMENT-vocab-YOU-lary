import firebase from 'firebase/app';
import 'firebase/auth';
import renderToDom from './renderToDom';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
  renderToDom('#app', 'You are now logged in!');
};

const signOut = () => {
  firebase.auth().signOut();
  renderToDom('#app', '');
};

export { signIn, signOut };
