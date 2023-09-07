import { signOut } from './auth';

const addEvents = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id.includes('homeBtn')) {
      console.warn('Home Button Clicked!');
    }
    if (e.target.id.includes('addCardBtn')) {
      console.warn('Add Card Button Clicked!');
    }
    if (e.target.id.includes('logoutBtn')) {
      console.warn('Logout Button Clicked!');
      signOut();
    }
  });
};

export default addEvents;
