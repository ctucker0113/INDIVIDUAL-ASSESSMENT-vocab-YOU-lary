import { signOut } from './auth';
import addCardForm from '../forms/addCardForm';
import renderHomePage from '../pages/renderHomePage';

const addEvents = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id.includes('homeBtn')) {
      renderHomePage();
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
      const definition = document.querySelector('#userDefinition').value;
      console.warn(`Vocab Word: ${vocabWord} definition: ${definition}`);
    }
  });
};

export default addEvents;
