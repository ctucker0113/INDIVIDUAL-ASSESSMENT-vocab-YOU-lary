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
</ul>
<div class = "cardBody"> 
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Vocab Word 1</h5>
    <a href="#" class="btn btn-primary">Flip Card</a>
  </div>
</div><div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">Vocab Word 2</h5>
  <a href="#" class="btn btn-primary">Flip Card</a>
</div>
</div><div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">Vocab Word 3</h5>
  <a href="#" class="btn btn-primary">Flip Card</a>
</div>
</div>
</div>`;

  renderToDom('#app', homePageHTML);
};

export default renderHomePage;
