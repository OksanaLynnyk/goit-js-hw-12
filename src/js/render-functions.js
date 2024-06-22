import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
    imageWrapper: document.querySelector('.js-imageWrapper'),
    loadMore: document.querySelector('.loadMore'),
};

function createMarkup({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) {
    return `<div class="img-card">
            <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}"></a> 
            <div class="text-wrapper">
            <p class="text">Likes<span class="wrapper">${likes}</span></p>
            <p class="text">Views<span class="wrapper">${views}</span></p>
            <p class="text">Comments<span class="wrapper">${comments}</span></p>
            <p class="text">Downloads<span class="wrapper">${downloads}</span></p></div>
            </div>`;
};

function updateImgList(markup) {
    refs.imageWrapper.insertAdjacentHTML('beforeend', markup);
    const lightbox = new SimpleLightbox('.img-card a');
    lightbox.refresh();
};

function clearImageList() {
    refs.imageWrapper.innerHTML = '';
};

function showLoad() {
    refs.loadMore.textContent = '';
    refs.loadMore.classList.remove('hidden');
    refs.loadMore.classList.add('loader');
   
};

function hideLoad() {
    refs.loadMore.classList.add('hidden');
    refs.loadMore.classList.remove('loader');
};

export { createMarkup, updateImgList, clearImageList, showLoad, hideLoad };