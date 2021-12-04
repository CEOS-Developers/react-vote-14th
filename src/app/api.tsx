import { LoginPayloadI, SignUpPayloadI } from './auth/types';
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
