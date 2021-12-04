import axios from './customAxios';

class Api {
  requestGetCandidates = async () => {
    const res = await axios.get('');
    return res.data;
  };

  requestPostVote = async () => {
    const res = await axios.post('');
    return res.data;
  };
}

const api = new Api();

export default api;
