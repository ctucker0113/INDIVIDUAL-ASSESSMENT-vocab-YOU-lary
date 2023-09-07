// import renderToDom from './renderToDom';
// import domEvents from './sample_data/events';
import renderHomePage from '../pages/renderHomePage';
import addEvents from './domEvents';

const startApp = () => {
  console.warn('App Started! Lets get it on!');
  renderHomePage();
  addEvents();
};

export default startApp;
