import { LoginPayloadI, SignUpPayloadI } from './auth/types';
import axios from './customAxios';
const token = localStorage.getItem('token');
class Api {
  requestGetCandidates = async () => {
    const res = await axios.get('candidates/');
    return res.data;
  };

  requestPostVote = async (id: number) => {
    console.log(token);
    const res = await axios.post(`candidates/${id}/vote/`, null, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    console.log(res);
  };

  requestPostSignUp = async (payload: SignUpPayloadI) => {
    const res = await axios.post('register/', payload);
    return res.data;
  };

  requestPostLogin = async (payload: LoginPayloadI) => {
    const res = await axios.post('login/', payload);
    return res.data;
  };

  requestCheckUserVerification = async () => {
    const res = await axios.post('user/verify/');
    console.log('api res: ', res);
    return res.status;
  };
}

const api = new Api();

export default api;
