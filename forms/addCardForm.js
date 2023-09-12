const addCardForm = () => {
  document.querySelector('#cardsSection').innerHTML = '';
  document.querySelector('#app').innerHTML = `
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
<input class="form-control form-control-lg" id="userVocabInput" type="text" placeholder="Vocab Word" aria-label=".form-control-lg example">
<input class="form-control" id="userDefinitionInput" type="text" placeholder="Definition" aria-label="default input example">
<button type="button" class="btn btn-danger" id='submitCardBtn'>Submit</button>`;
};

export default addCardForm;
