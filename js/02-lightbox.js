import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ulEl = document.querySelector(".gallery");

const markup = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="large-image.jpg"
        alt="${description}"
      />
    </a>
  </li >`;
});
// Додавання фрагмента в DOM
ulEl.insertAdjacentHTML("afterbegin", markup.join(""));

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "Alt",
});
