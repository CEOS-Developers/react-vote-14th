import { LOCAL_SERVER_URL, SERVER_URL } from '../config';
import axios from 'axios';

// axios.defaults.baseURL = LOCAL_SERVER_URL;
axios.defaults.baseURL = SERVER_URL;

// axios.defaults.headers => for jwt

axios.defaults.maxBodyLength = Infinity;
axios.defaults.maxContentLength = Infinity;
export default axios;
