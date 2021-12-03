import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import styled from 'styled-components';

import { setCookie } from '../shared/Cookie';
import { setLoginState } from '../shared/reducer';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const handleSignInbtn = (e: any) => {
    e.preventDefault();
    if (!nickname || !password) {
      alert('유효한 값을 입력해 주세요.');
      return;
    }
    axios
      .post(
        'https://chatminder.cf/api/auth/token',
        {
          login_id: nickname,
          password: password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
        //로그인 성공 시 Redux로 isLoggedin state true로 바꿈
        const id = response.data.id;
        dispatch(setLoginState(id));

        console.log(id);

        const ACCESS_TOKEN = response.data.access;
        const REFRESH_TOKEN = response.data.refresh;
        //쿠키에 토큰 저장
        setCookie('access', ACCESS_TOKEN);
        setCookie('refresh', REFRESH_TOKEN);

        //로그인 성공 시 '/'로 이동
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Wrapper>
      <Form>
        <InputContainer>
          <InputItem>
            <Input
              required
              placeholder="닉네임"
              size="xlarge"
              color="secondary"
              onChange={(e) => {
                setNickname(e.target.value);
              }}
            />
          </InputItem>
          <InputItem>
            <Input
              required
              type="password"
              placeholder="비밀번호"
              size="xlarge"
              color="secondary"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </InputItem>
        </InputContainer>
        <ButtonContainer>
          <Button
            type="submit"
            color="secondary"
            auto
            ghost
            onClick={(e) => handleSignInbtn(e)}
          >
            로그인
          </Button>
        </ButtonContainer>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Form = styled.form`
  display: flex;
`;

const InputContainer = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const InputItem = styled.div`
  margin: 20px;
`;

export default SignIn;
