import { Cookies } from 'react-cookie';

const cookies = new Cookies();

// 쿠키에서 받아오는 함수
export const getCookie = (name) => cookies.get(name);

// 쿠키에 저장하는 함수
export const setCookie = (name, value) => cookies.set(name, value);
