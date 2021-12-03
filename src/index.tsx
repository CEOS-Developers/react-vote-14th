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
import { CssBaseline } from '@nextui-org/react';
import styled from 'styled-components';

const Background = styled.div`
  background: linear-gradient(
      217deg,
      rgba(231, 0, 200, 0.8),
      rgba(255, 0, 0, 0) 70.71%
    ),
    linear-gradient(127deg, rgba(236, 169, 24, 0.8), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(20, 55, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
const Container = styled.div`
  background-color: #ffffff;
  width: 75vmin;
  height: 90vmin;
  display: flex;
  overflow: auto;
  padding: 5vmin;
  border-radius: 3vmin;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Background>
      <Container>
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
      </Container>
    </Background>
  </React.StrictMode>,
  document.getElementById('root')
);
