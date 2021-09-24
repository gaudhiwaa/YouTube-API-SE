import axios from 'axios'

const KEY = 'AIzaSyCpMpVrPhsnjCup0_GAnJ7o4GDN7Z5RyU8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
})