import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const markup = galleryItems.map(galleryImg).join(``);

gallery.insertAdjacentHTML("beforeend", markup);
gallery.addEventListener(`click`, onShowImg);

function galleryImg({ description, original, preview }) {
  return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
  `;
}

function onShowImg(event) {
  event.preventDefault();
  if (!event.target.tagName === `IMG`) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();
  console.log(event.target.tagName === `IMG`);
}
