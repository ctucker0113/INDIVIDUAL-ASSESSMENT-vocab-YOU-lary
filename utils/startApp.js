// import renderToDom from './renderToDom';
// import domEvents from './sample_data/events';
import renderHomePage from '../pages/renderHomePage';
import addEvents from './domEvents';

const startApp = (user) => {
  console.warn(user.uid);
  renderHomePage();
  addEvents();
};

export default startApp;
