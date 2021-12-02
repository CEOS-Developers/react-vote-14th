import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from './pages/shared/reducer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CssBaseline } from '@nextui-org/react';
import { createGlobalStyle } from 'styled-components';

import Vote from './pages/Vote(ROUM)/Vote';
import LogIn from './pages/Auth(SEEWON)/LogIn';
import { getCookie } from './pages/shared/Cookie';

const App = () => {
  const dispatch = useDispatch();

  //Redux로부터 userObj를 받아옴!(isLoggedin 상태를 체크하기 위해)
  const userObj: any = useSelector((state) => state);
  const id = userObj.id;

  //userObj의 상태(isLoggedin)가 바뀔 때마다 호출되는 useEffect에서 토큰 검증
  useEffect(() => {
    axios
      .get(`https://chatminder.cf/api/users`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getCookie('access')}`,
        },
      })
      .then((response) => {
        //Redux로 전역 state에 닉네임, 이메일 저장
        const [nickname, email] = [response.data.login_id, response.data.email];
        dispatch(setUserData(nickname, email));
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  }, [id]);

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
