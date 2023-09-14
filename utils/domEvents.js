import { signOut } from './auth';
import addCardForm from '../forms/addCardForm';
import editCardForm from '../forms/editCardForm';
import renderHomePage from '../pages/renderHomePage';
import {
  showCards,
  getCards,
  deleteCards,
  emptyCards,
  createCard,
  updateCard,
  getSingleCard,
  searchCards
} from '../pages/cards';

const addEvents = (user) => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id.includes('homeBtn')) {
      renderHomePage();
      getCards(user.uid).then(showCards);
    }
    if (e.target.id.includes('addCardBtn')) {
      addCardForm();
    }
    if (e.target.id.includes('logoutBtn')) {
      signOut();
    }
    if (e.target.id.includes('submitCardBtn')) {
      const timeStamp = new Date().toLocaleString();
      const payload = {
        vocabWord: document.querySelector('#userVocabInput').value,
        definition: document.querySelector('#userDefinitionInput').value,
        language: document.querySelector('#userLanguageInput').value,
        timeSubmitted: timeStamp,
        uid: user.uid,
      };

      createCard(payload).then(({ name }) => {
        const patchPayload = { firebasekey: name };
        console.warn(`The firebasekey is ${name}`);
        updateCard(patchPayload).then(() => {
          getCards(user.uid).then(showCards);
        });
      });
      document.querySelector('#app').innerHTML = '';
      renderHomePage();
    }

    if (e.target.id.includes('submitEditBtn')) {
      console.warn('Submit Edit Button Clicked!');
      const timeStamp = new Date().toLocaleString();
      const [, firebasekey] = e.target.id.split('--');
      console.warn(firebasekey);
      // getSingleCard(firebasekey).then((cardObj) => updateCard(cardObj))
      // getCards(user.uid).then(showCards);
      const payload = {
        firebasekey,
        vocabWord: document.querySelector('#userVocabInput').value,
        definition: document.querySelector('#userDefinitionInput').value,
        language: document.querySelector('#userLanguageInput').value,
        timeSubmitted: timeStamp,
        uid: user.uid,
      };
      console.warn(payload.firebasekey);
      updateCard(payload).then(() => {
        getCards(user.uid).then(showCards);
      });
      document.querySelector('#app').innerHTML = '';
      renderHomePage();
    }

    if (e.target.id.includes('searchBtn')) {
      const searchValue = document.querySelector('#searchBar').value;
      console.warn(searchValue);
      searchCards(searchValue, user.uid).then((search) => {
        if (search.length) {
          showCards(search);
        } else {
          emptyCards();
        }
      });
      document.querySelector('#searchBar').value = '';
    }
  });

  document.querySelector('#cardsSection').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-card-btn')) {
      const [, firebasekey] = e.target.id.split('--');
      console.warn(firebasekey);
      deleteCards(firebasekey).then(() => {
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
      const [, firebasekey] = e.target.id.split('--');
      console.warn(firebasekey);
      getSingleCard(firebasekey).then((cardObj) => editCardForm(user.uid, cardObj));
    }
  });
};

export default addEvents;
