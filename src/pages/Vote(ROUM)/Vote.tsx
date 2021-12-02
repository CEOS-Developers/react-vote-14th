import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { removeCookie } from '../shared/Cookie';

const Vote = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };
  const handleLogoutClick = () => {
    removeCookie('access');
    removeCookie('refresh');
    navigate('/login');
  };

  return (
    <div>
      투표창 (로움님 부탁드려요😁)
      <div>
        <div>
          <button onClick={handleLoginClick}>로그인</button>
          <button onClick={handleLogoutClick}>로그아웃</button>
        </div>
      </div>
    </div>
  );
};

export default Vote;
