import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from './@shared/context/user';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Vote from './pages/vote/vote';
import Result from './pages/result/result';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
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
