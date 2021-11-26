import React, { useState } from 'react';
import { CssBaseline } from '@nextui-org/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Vote from './pages/Vote';
import { createGlobalStyle } from 'styled-components';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <CssBaseline />
      <Globalstyle />
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Vote />} />
          <Route path={`/login`} element={<LogIn />} />
          <Route path={`/signup`} element={<SignUp />} />
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
