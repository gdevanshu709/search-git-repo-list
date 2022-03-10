import axios from 'axios';

const instance = axios.create({
    headers: {Authorization: `Token ${process.env.GITHUB_ACCESS_KEY}`}
})

export default instance;
