import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const blokGalleri = document.querySelector('.gallery');
const makeGalleri = galleryItems
  .map(({ preview, original, description }) => {
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
  </div>`;
  })
  .join('');

blokGalleri.insertAdjacentHTML('afterbegin', makeGalleri);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// blokGalleri.addEventListener('click', event => {
//   event.preventDefault();
//   const element = event.target.dataset.source;
//   if (event.target.classList.contains('gallery')) return;

//   const instance = basicLightbox.create(`
//     <img src="${element}" width="800" height="600">
// `);

//   instance.show();
// });
