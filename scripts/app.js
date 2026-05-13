const photoGrid = document.getElementById("photo-grid");
const lightbox = document.getElementById("lightbox");
let currentIndex = 0;

function init() {
  renderHeader(document.getElementById("site-header"));
  renderFooter(document.getElementById("site-footer"));
  renderLightbox(lightbox);
  renderGallery(photoGrid, PHOTOS, openPhoto);
  bindLightboxEvents();
  revealCards();
}

function openPhoto(index) {
  currentIndex = index;
  updateLightbox(lightbox, PHOTOS, currentIndex);
  setLightboxOpen(lightbox, true);
  lightbox.querySelector(".lightbox-close").focus();
}

function closePhoto() {
  setLightboxOpen(lightbox, false);
}

function changePhoto(direction) {
  const img = lightbox.querySelector(".lightbox-image");
  img.classList.add("is-changing");
  window.setTimeout(function () {
    let nextIndex = currentIndex + direction + PHOTOS.length;
    currentIndex = nextIndex % PHOTOS.length;
    updateLightbox(lightbox, PHOTOS, currentIndex);
    img.classList.remove("is-changing");
  }, 150);
}

function bindLightboxEvents() {
  lightbox.addEventListener("click", handleLightboxClick);
  document.addEventListener("keydown", handleKeys);
}

function handleLightboxClick(event) {
  let navButton = event.target.closest("[data-direction]");
  if (navButton) {
    changePhoto(Number(navButton.dataset.direction));
  }
  if (event.target.matches(".lightbox, .lightbox-close")) {
    closePhoto();
  }
}

function handleKeys(event) {
  if (!lightbox.classList.contains("is-open")) {
    return;
  }
  useDialogKey(event.key);
}

function useDialogKey(key) {
  if (key === "Escape") {
    closePhoto();
  }
  if (key === "ArrowLeft") {
    changePhoto(-1);
  }
  if (key === "ArrowRight") {
    changePhoto(1);
  }
}

function revealCards() {
  let cards = document.querySelectorAll(".photo-card");
  cards.forEach(function(card, index) {
    card.style.setProperty("--delay", `${index * 45}ms`);
    card.classList.add("is-visible");
  });
}

init();
