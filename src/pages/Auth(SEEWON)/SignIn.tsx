import React, { useState } from 'react';
import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import styled from 'styled-components';
import axios from 'axios';

const SignIn = () => {
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
        'http://ec2-3-37-86-93.ap-northeast-2.compute.amazonaws.com/api/auth/token',
        {
          login_id: nickname,
          password: password,
        }
      )
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
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
