import React, { useState } from 'react';
import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import styled from 'styled-components';
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUpbtn = (e: any) => {
    e.preventDefault();
    if (!email || !nickname || !password) {
      alert('유효한 값을 입력해 주세요.');
      return;
    }
    axios
      .post(
        'http://ec2-3-37-86-93.ap-northeast-2.compute.amazonaws.com/api/users',
        {
          login_id: nickname,
          password: password,
          email: email,
        }
      )
      .then(function (response) {
        console.log(response);
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
              type="email"
              placeholder="E-mail"
              size="xlarge"
              color="secondary"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </InputItem>
          <InputItem>
            <Input
              required
              type="text"
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
            onClick={(e) => handleSignUpbtn(e)}
          >
            회원가입
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

export default SignUp;
