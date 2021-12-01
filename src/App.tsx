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
  const userObj = useSelector((state) => state);
  console.log(userObj);

  //userObj의 상태(isLoggedin)가 바뀔 때마다 호출되는 useEffect
  //토큰 검증 후 Redux로 닉네임, 이메일 state 저장
  useEffect(() => {
    axios
      .get(
        'http://ec2-3-37-86-93.ap-northeast-2.compute.amazonaws.com/api/auth/token',
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        console.log(response);
        //이 부분은 오는 response 형식에 맞게 수정할 것
        const { nickname, email } = response.data;
        dispatch(setUserData(nickname, email));
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  }, [userObj]);

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
