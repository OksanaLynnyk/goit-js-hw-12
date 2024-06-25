import PixabayApi, { perPage } from './js/pixabay-api.js'
import { createMarkup, updateImgList, clearImageList, LoadMoreBtn, smoothScroll } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
    form: document.querySelector('.js-form')
};

const pixabayApi = new PixabayApi();
const loadMoreBtn = new LoadMoreBtn({
    selector: '.loadMore',
    isHidden: true
});

refs.form.addEventListener('submit', onSearch);
loadMoreBtn.button.addEventListener('click', (e) => fetchImages(e));

function onSearch(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const value = form.elements.image.value.trim();
  
    if (value === '') 
        return iziToast.warning({
        position: 'topRight',
        title: 'Caution',
        message: 'You forgot important data',
    })
    else {
        pixabayApi.searchQuery = value;
        pixabayApi.resetPage();
        loadMoreBtn.show();
        clearImageList();
        fetchImages()
        .finally(() => { 
         form.reset();
        });
    }
};

async function fetchImages(e) {
    loadMoreBtn.disable();
    try {
        const markup = await getImagesMarkup(); 
        if (markup) updateImgList(markup);
        if (e && e.target === loadMoreBtn.button) smoothScroll()
    } catch(err) {
        onError(err);
    }
    loadMoreBtn.enable();  
}

async function getImagesMarkup() {
    try {
        const {hits, totalHits}  = await pixabayApi.getImages();
        if (hits.length === 0) {
            onError();   
        } 
        else if (hits.length < perPage || pixabayApi.page * perPage > totalHits) { 
            loadMoreBtn.hide();
            iziToast.warning({
                position: 'topRight',
                title: 'Caution',
                message: 'We are sorry, but you have reached the end of search results',
            })
        }
        return hits.reduce((markup, image) => markup + createMarkup(image), '');
    } catch (err) {
        onError(err);
      }
}

function onError() {
    loadMoreBtn.hide();
    iziToast.error({
        position: 'topRight',
        title: 'Error',
        message:'Sorry, there are no images matching your search query. Please try again!'});
    clearImageList()
};
