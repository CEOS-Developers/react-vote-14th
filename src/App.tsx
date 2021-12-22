import React from 'react';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { store } from './app/store';
import withAuth from './hoc/withAuth';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import Vote from './pages/vote/Vote';

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={withAuth(Login, true)} />
            <Route path="/sign-up" element={withAuth(SignUp, true)} />
            <Route path="/vote" element={withAuth(Vote, false)} />
            <Route path="/" element={withAuth(SignUp, true)} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}
const GlobalStyle = createGlobalStyle`
  body{
    background: linear-gradient(45deg, lightyellow, lightpink);
    
  }
`;
export default App;
