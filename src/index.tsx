import * as React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from './@shared/context/user';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Vote from './pages/vote/vote';
import Result from './pages/result/result';
import HttpClient from './@shared/http/httpClient';
import TokenStorage from './@shared/db/token';
import AuthService from './@shared/service/auth';
import VoteService from './@shared/service/vote';
import Navbar from './@shared/components/navbar';

const baseURL = 'http://ec2-13-125-77-192.ap-northeast-2.compute.amazonaws.com';
const tokenStorage = new TokenStorage();
const httpClient = new HttpClient(baseURL);
const authService = new AuthService(httpClient, tokenStorage);
const voteService = new VoteService(httpClient, tokenStorage);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
