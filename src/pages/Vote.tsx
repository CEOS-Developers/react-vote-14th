import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Vote = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };
  const handleSignupClick = () => {
    navigate('./signup');
  };

  return (
    <div>
      투표창 (로움님 부탁드려요😁)
      <div>
        밑에 버튼들은 개발 단계에서만 쓰고 나중에는 지우겠습니다! 네비게이션이
        필요하지는 않을 것 같아서요!
        <div>
          <button onClick={handleLoginClick}>로그인</button>
          <button onClick={handleSignupClick}>회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default Vote;
