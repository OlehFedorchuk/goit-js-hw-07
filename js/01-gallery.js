import { galleryItems } from "./gallery-items.js";

const ulEl = document.querySelector(".gallery");

const fragment = document.createDocumentFragment();

for (var i = 0; i < galleryItems.length; i += 1) {
  const listItem = document.createElement("li");
  listItem.className = "gallery__item";

  const link = document.createElement("a");
  link.className = "gallery__link";
  link.href = galleryItems[i].original;

  const image = document.createElement("img");
  image.className = "gallery__image";
  image.src = galleryItems[i].preview;
  image.setAttribute("data-source", `${galleryItems[i].original}`);
  image.alt = galleryItems[i].description;

  link.appendChild(image);
  listItem.appendChild(link);

  fragment.appendChild(listItem);
}

// Додавання фрагмента в DOM
ulEl.appendChild(fragment);

ulEl.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();

  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}">
  `);

  instance.show();
}

// const closeModalOnEscape = (event) => {
//   if (event.key === "Escape") {
//     basicLightbox.close();
//   }
// };
// document.addEventListener("keydown", closeModalOnEscape);
