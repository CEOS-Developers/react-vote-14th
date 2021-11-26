import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Vote = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div>
      투표창 (로움님 부탁드려요😁)
      <div>
        <div>
          <button onClick={handleLoginClick}>로그인</button>
        </div>
      </div>
    </div>
  );
};

export default Vote;
