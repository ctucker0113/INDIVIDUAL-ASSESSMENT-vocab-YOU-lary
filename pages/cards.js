import renderToDom from '../utils/renderToDom';
import client from '../utils/client';
// const renderCards = (uid) => {

// }
const endpoint = client.databaseURL;

const emptyCards = () => {
  const domString = `
  <div class="card">
  <div class="card-body">
    You don't have any cards yet! Add some cards!
  </div>
  </div>`;

  renderToDom('#cardsSection', domString);
};

export default emptyCards;

const getCards = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cardsData.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const showCards = (array) => {
  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${item.vocabWord}</h5>
                <p class="card-text">${item.definition}</p>
                <a href="#" class="btn btn-primary" id="delete-card-btn--${item.firebasekey}">Delete</a>
                <a href="#" class="btn btn-primary" id="edit-card-btn--${item.firebasekey}">Edit</a>
        </div>
    </div>
    `;
  });
  renderToDom('#cardsSection', domString);
};

const deleteCards = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cardsData/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cardsData.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/cardsData/${payload.firebasekey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  showCards, getCards, emptyCards, deleteCards, createCard, updateCard
};
