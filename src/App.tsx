import React, { useState } from 'react';
import { CssBaseline } from '@nextui-org/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Vote from './pages/Vote';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path={`/login`} element={<LogIn />} />
          <Route path={`/signup`} element={<SignUp />} />
          <Route path={`/vote`} element={<Vote />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
