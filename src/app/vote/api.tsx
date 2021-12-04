import axios from 'axios';
export const requestGetCandidates = async () => {
  const res = await axios.get('');
  return res.data;
};
export const requestPostVote = async () => {
  const res = await axios.post('');
  return res.data;
};
