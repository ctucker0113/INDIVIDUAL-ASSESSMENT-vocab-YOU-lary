const editCardForm = (uid, obj = {}) => {
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
  <input class="form-control form-control-lg" id="userVocabInput" type="text" placeholder="Vocab Word" value="${obj.vocabWord}"aria-label=".form-control-lg example">
  <input class="form-control" id="userDefinitionInput" type="text" placeholder="Definition" value="${obj.definition}"aria-label="default input example">
  <div class="form-group">
          <label for="language">Select a Language</label>
      <select class="form-control" id="userLanguageInput" required>
      <option value="">Select a Category</option>" required>
      <option value="English">English</option>
      <option value="Spanish">Spanish</option>
      <option value="Other">Other</option>
      </select>
          </div>
  <button type="button" class="btn btn-danger" id='submitEditBtn'>Update</button>`;
};

export default editCardForm;
