import API from './js/pixabay-api.js';
import { createMarkup, updateImgList, clearImageList, showLoad, hideLoad } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const refs = {
    form: document.querySelector('.js-form')
};

refs.form.addEventListener('submit', onSearch);

function onSearch(event) {
    event.preventDefault();
  
    const form = event.currentTarget;
    const value = form.elements.image.value.trim();
  
    if (value === '') return iziToast.warning({
        title: 'Caution',
        message: 'You forgot important data',
    });
    
    clearImageList();
    showLoad();

    API.getImages(value)
        .then(({hits}) => {
         if (hits.length === 0) {
            iziToast.error({title: 'Error',
            message:'Sorry, there are no images matching your search query. Please try again!'})
         }
         return hits.reduce((markup, image) => markup + createMarkup(image), '');
        })
        .then(updateImgList)
        .catch(onError)
        .finally(() => { 
         form.reset(); 
         hideLoad();
        });
};

function onError() {
   refs.imageWrapper.innerHTML = ''
};
