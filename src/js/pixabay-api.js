import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '44402631-bf7d189f653a3e22d2fd50e44';


export default class PixabayApi {
    constructor() {
        this.page = 1;
        this.searchQuery = '';
        this.perPage = 15
    }

    async getImages() {
        const params = {
            key: API_KEY,
            q: this.searchQuery,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true',
            per_page: this.perPage,
            page: this.page
        };
        const { data } = await axios.get('', { params });
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
