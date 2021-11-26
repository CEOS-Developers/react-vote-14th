import React from 'react';
import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import styled from 'styled-components';

const SignIn = () => {
  return (
    <Wrapper>
      <InputContainer>
        <InputItem>
          <Input placeholder="닉네임" size="xlarge" color="secondary" />
        </InputItem>
        <InputItem>
          <Input
            type="password"
            placeholder="비밀번호"
            size="xlarge"
            color="secondary"
          />
        </InputItem>
      </InputContainer>
      <ButtonContainer>
        <Button color="secondary" auto ghost>
          로그인
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
