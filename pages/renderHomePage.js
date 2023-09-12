import renderToDom from '../utils/renderToDom';

// Renders Dummy Cards and NavBar to Screen
const renderHomePage = () => {
  document.querySelector('#login-form-container').innerHTML = '';
  const homePageHTML = `
  <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#" id='homeBtn'>Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" id='addCardBtn'>Add Card</a>
  </li>
  <li class="nav-item">
  <a class="nav-link" href="#" id='logoutBtn'>Logout</a>
</li>
</ul>`;

  renderToDom('#app', homePageHTML);
};

export default renderHomePage;
