import renderToDom from '../utils/renderToDom';

const renderHomePage = () => {
  const homePageHTML = `<div class = "cardBody"> 
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
