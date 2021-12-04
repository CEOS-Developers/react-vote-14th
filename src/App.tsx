import React from 'react';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './app/store';
import withAuth from './hoc/withAuth';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import Vote from './pages/vote/Vote';

function App() {
  return (
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
  );
}

export default App;
