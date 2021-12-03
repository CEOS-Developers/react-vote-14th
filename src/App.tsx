import React, { useState } from "react";
import { CssBaseline } from "@nextui-org/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Vote from "./pages/Vote(ROUM)/Vote";
import LogIn from "./pages/Auth(SEEWON)/LogIn";
import Test from "./pages/Vote(ROUM)/Test";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <CssBaseline />
      <Globalstyle />
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Vote />} />
          <Route path={`/test`} element={<Test />} />
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
