// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function getGalleryItemHtml(sourse, src, alt) {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${sourse}">
    <img
      class="gallery__image"
      src="${src}"
      data-source="${sourse}"
      alt="${alt}"
    />
  </a>
</li>`;
}

const galleryItemsHTML = galleryItems
  .map((item) => {
    return getGalleryItemHtml(item.original, item.preview, item.description);
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", galleryItemsHTML);

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
