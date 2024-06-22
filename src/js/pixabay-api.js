const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '44402631-bf7d189f653a3e22d2fd50e44';
const imageType = 'photo';
const imgOrientation = 'horizontal';
const safeSearch = 'true';

function getImages(query) {
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=${imageType}&orientation=${imgOrientation}&safesearch=${safeSearch}`).then((res) => res.json());
};

export default { getImages };

