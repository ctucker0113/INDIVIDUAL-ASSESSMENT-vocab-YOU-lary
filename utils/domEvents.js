import { signOut } from './auth';
import addCardForm from '../forms/addCardForm';
import renderHomePage from '../pages/renderHomePage';
import {
  showCards, getCards, deleteCards, emptyCards
} from '../pages/cards';

const addEvents = (user) => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id.includes('homeBtn')) {
      renderHomePage();
      showCards();
    }
    if (e.target.id.includes('addCardBtn')) {
      addCardForm();
    }
    if (e.target.id.includes('logoutBtn')) {
      signOut();
    }
    if (e.target.id.includes('submitCardBtn')) {
      console.warn('Submit Button Clicked!');
      const vocabWord = document.querySelector('#userVocabInput').value;
      const definition = document.querySelector('#userDefinitionInput').value;
      console.warn(`Vocab Word: ${vocabWord} definition: ${definition}`);
    }
  });

  document.querySelector('#cardsSection').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn(firebaseKey);
      deleteCards(firebaseKey).then(() => {
        getCards(user.uid).then((array) => {
          if (array.length) {
            showCards(array);
          } else {
            emptyCards();
          }
        });
      });
    }

    if (e.target.id.includes('edit-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn(firebaseKey);
    }
  });
};

export default addEvents;
