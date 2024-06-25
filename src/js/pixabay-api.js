import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '44402631-bf7d189f653a3e22d2fd50e44';
const imageType = 'photo';
const imgOrientation = 'horizontal';
const safeSearch = 'true';
const perPage = 15;

export default class PixabayApi {
    constructor() {
        this.page = 1;
        this.searchQuery = '';
    }

    async getImages() {
        const { data } = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=${imageType}&orientation=${imgOrientation}&safesearch=${safeSearch}&per_page=${perPage}&page=${this.page}`);
        this.incrementPage();
        return data;
    }

    resetPage() {
        this.page = 1;
    }

    incrementPage() {
        this.page += 1;
    }
}

export { perPage };

