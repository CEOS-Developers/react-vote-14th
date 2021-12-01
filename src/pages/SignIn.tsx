import React from 'react';
import axios from 'axios';
import LoginFormContainer from '../components/forms/LoginFormContainer';

const SignIn = () => {
  // 페이지 진입 시 id 입력 form에 focus.
  // 전체 form도 묶어서 컴포넌트로 만들기
  // 각 input form 컴포넌트화하기

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Log in</h1>
      <p>15기 프론트/파트장 투표</p>
      <LoginFormContainer />
    </div>
  );
};

export default SignIn;
