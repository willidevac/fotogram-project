const HEADER_TEMPLATE = `
  <div class="header-inner">
    <a class="brand" href="./" aria-label="FoodGram home">
      <img class="brand-logo" src="assets/foodgram-logo.svg" alt="FoodGram">
    </a>
  </div>
`;

function renderHeader(target) {
  target.innerHTML = HEADER_TEMPLATE;
}
