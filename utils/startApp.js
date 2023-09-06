import renderToDom from './renderToDom';

const startApp = () => {
  console.warn('App Started! Lets get it on!');
  renderToDom('#app', 'We are logged in!');
};

export default startApp;
