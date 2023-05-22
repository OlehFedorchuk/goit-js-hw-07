import { galleryItems } from "./gallery-items.js";

const ulEl = document.querySelector(".gallery");

const markup = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li >`;
});
// Додавання фрагмента в DOM
ulEl.insertAdjacentHTML("afterbegin", markup.join(""));
ulEl.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}">
  `);

  instance.show();
}
