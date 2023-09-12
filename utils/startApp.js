// import renderToDom from './renderToDom';
// import domEvents from './sample_data/events';
import renderHomePage from '../pages/renderHomePage';
import addEvents from './domEvents';
import { emptyCards, showCards, getCards } from '../pages/cards';

const startApp = (user) => {
  renderHomePage();
  addEvents(user);
  console.warn(user.uid);

  getCards(user.uid).then((array) => {
    if (array.length) {
      showCards(array);
    } else {
      emptyCards();
    }
  });
};

export default startApp;
