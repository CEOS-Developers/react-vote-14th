import { LOCAL_SERVER_URL, SERVER_URL } from '../config';
import axios from 'axios';

// axios.defaults.baseURL = LOCAL_SERVER_URL;
axios.defaults.baseURL = SERVER_URL;

axios.defaults.headers.common = {
  Authorization: `Bearer ${window.localStorage.getItem('token')}`,
};

axios.defaults.maxBodyLength = Infinity;
axios.defaults.maxContentLength = Infinity;
export default axios;
