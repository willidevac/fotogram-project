const LIGHTBOX_TEMPLATE = `
  <article class="lightbox-dialog" role="dialog" aria-modal="true" aria-label="Image viewer">
    <button class="lightbox-close" type="button" aria-label="Close image">&times;</button>
    <div class="lightbox-image-wrap">
      <img class="lightbox-image" src="" alt="">
    </div>
    <div class="lightbox-controls">
      <button class="lightbox-nav" type="button" data-direction="-1" aria-label="Previous image">&larr;</button>
      <span class="lightbox-counter" aria-live="polite"></span>
      <button class="lightbox-nav" type="button" data-direction="1" aria-label="Next image">&rarr;</button>
    </div>
  </article>
`;

function renderLightbox(target) {
  target.innerHTML = LIGHTBOX_TEMPLATE;
}

function updateLightbox(target, photos, index) {
  const photo = photos[index];
  target.querySelector(".lightbox-image").src = photo.src;
  target.querySelector(".lightbox-image").alt = photo.alt;
  target.querySelector(".lightbox-counter").textContent = `${index + 1}/${photos.length}`;
}

function setLightboxOpen(target, isOpen) {
  if (isOpen) {
    target.classList.add("is-open");
    target.setAttribute("aria-hidden", "false");
    return;
  }
  target.classList.add("is-closing");
  window.setTimeout(() => finishClosingLightbox(target), 180);
}

function finishClosingLightbox(target) {
  target.classList.remove("is-open", "is-closing");
  target.setAttribute("aria-hidden", "true");
}
