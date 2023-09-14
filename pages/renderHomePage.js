import renderToDom from '../utils/renderToDom';

// Renders Dummy Cards and NavBar to Screen
const renderHomePage = () => {
  document.querySelector('#login-form-container').innerHTML = '';
  const homePageHTML = `
  <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Search Cards" aria-label="Username" aria-describedby="basic-addon1" id="searchBar">
</div>
  <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#" id='homeBtn'>Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" id='addCardBtn'>Add Card</a>
  </li>
  <li class="nav-item">
  <a class="nav-link" href="#" id='searchBtn'>Search</a>
</li>
  <li class="nav-item">
  <a class="nav-link" href="#" id='logoutBtn'>Logout</a>
</li>
</ul>`;

  renderToDom('#app', homePageHTML);
};

export default renderHomePage;
