import axios from 'axios'

const KEY = 'AIzaSyAhr0Q5oqu7nRHibiUpZsD8-6QVG3xFJCs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
})