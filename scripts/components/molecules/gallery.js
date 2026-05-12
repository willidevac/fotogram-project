function createPhotoItem(photo, index) {
  return `
    <li class="photo-card">
      <button class="photo-button" type="button" data-index="${index}">
        <img src="${photo.src}" alt="${photo.alt}" width="180" height="180" loading="lazy">
      </button>
    </li>
  `;
}

function renderGallery(target, photos, onSelect) {
  target.innerHTML = photos.map(createPhotoItem).join("");
  target.addEventListener("click", function(event) {
    selectPhoto(event, onSelect);
  });
}

function selectPhoto(event, onSelect) {
  const button = event.target.closest(".photo-button");
  if (!button) {
    return;
  }
  onSelect(Number(button.dataset.index));
}
