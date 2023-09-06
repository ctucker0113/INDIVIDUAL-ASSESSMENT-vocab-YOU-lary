import { signOut } from '../utils/auth';
// import renderToDom from '../utils/renderToDom';

const logoutButton = () => {
  // renderToDom('#app', 'You are now logged in!');
  const domString = '<button id="google-auth" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#login-form-container').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signOut);
};

export default logoutButton;
