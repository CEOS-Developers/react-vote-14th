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
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
