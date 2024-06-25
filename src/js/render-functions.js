import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
    imageWrapper: document.querySelector('.js-imageWrapper'),
};

const lightbox = new SimpleLightbox('.img-card a');

function createMarkup({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) {
    return `<div class="img-card">
            <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}"></a> 
            <div class="text-wrapper">
            <p class="text">Likes<span class="wrapper">${likes}</span></p>
            <p class="text">Views<span class="wrapper">${views}</span></p>
            <p class="text">Comments<span class="wrapper">${comments}</span></p>
            <p class="text">Downloads<span class="wrapper">${downloads}</span></p></div>
            </div>`
};

function updateImgList(markup) {
    refs.imageWrapper.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
};

function clearImageList() {
    refs.imageWrapper.innerHTML = '';
};

class LoadMoreBtn {
    static classes = {
        hidden: 'hidden',
        loader: 'loader'
    }
    constructor({selector, isHidden = false}) {
        this.button = this.getButton(selector);
        isHidden && this.hide();
    }

    getButton(selector) {
        return document.querySelector(selector);
    }

    hide() {
        this.button.classList.add(LoadMoreBtn.classes.hidden);
    }

    show() {
        this.button.classList.remove(LoadMoreBtn.classes.hidden);
    }

    disable() {
        this.button.disabled = true; 
        this.button.textContent = ''; 
        this.button.classList.add(LoadMoreBtn.classes.loader);
    }

    enable() {
        this.button.disabled = false;
        this.button.textContent = 'Load more'
        this.button.classList.remove(LoadMoreBtn.classes.loader);
    }
}

function smoothScroll() {
    const { height: cardHeight } = refs.imageWrapper.firstElementChild.getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
}

export { createMarkup, updateImgList, clearImageList,  LoadMoreBtn, smoothScroll};