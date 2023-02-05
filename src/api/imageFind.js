import axios from 'axios';

const KEY = '31529189-e658a57f43e24d6772cd1bf10'
axios.defaults.baseURL = `https://pixabay.com/api`

export const getImages = async (value, page) => {
    const response = await axios.get(`/?q=${value}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    return response.data
}