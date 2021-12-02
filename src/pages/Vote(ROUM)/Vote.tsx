import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { removeCookie } from '../shared/Cookie';

const Vote = () => {
  const userObj: any = useSelector((state) => state);
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
          {userObj.nickname
            ? `${userObj.nickname}님, 안녕하세요.`
            : `로그인해야 투표할 수 있습니다.`}
          {userObj.nickname ? (
            <button onClick={handleLogoutClick}>로그아웃</button>
          ) : (
            <button onClick={handleLoginClick}>로그인</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Vote;
