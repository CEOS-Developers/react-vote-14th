import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CssBaseline } from '@nextui-org/react';
import { createGlobalStyle } from 'styled-components';

import Vote from './pages/Vote(ROUM)/Vote';
import LogIn from './pages/Auth(SEEWON)/LogIn';
import { getCookie } from './pages/shared/Cookie';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getCookie('login');
    if (token) {
      axios
        .post(
          'http://ec2-3-37-86-93.ap-northeast-2.compute.amazonaws.com/토큰 유효성 검사 API',
          {
            ACCESS_TOKEN: token,
          }
        )
        .then((response) => {
          console.log(response.data);
          // Redux에 사용자 정보 저장
          // dispatch(
          //   setUser({
          //     email: response.data.email,
          //     nickname: response.data.login_id,
          //   })
          // );
        })
        .catch((error) => {
          console.log(error.code, error.message);
        });
    }
  }, []);

  return (
    <>
      <CssBaseline />
      <Globalstyle />
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Vote />} />
          <Route path={`/login`} element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const Globalstyle = createGlobalStyle`
  body {
    margin:0;
    width:100vw;
    height:100vh;
  }
`;

export default App;
