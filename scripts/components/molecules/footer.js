const FOOTER_TEMPLATE = `
  <div class="footer-inner">
    <div class="academy-brand" aria-label="Developer Akademie">
      <span class="academy-icon" aria-hidden="true"></span>
      <span class="academy-text">Developer<br>Akademie</span>
    </div>
    <p class="copyright">&copy; 2023 Developer Akademie GmbH</p>
  </div>
`;

function renderFooter(target) {
  target.innerHTML = FOOTER_TEMPLATE;
}
