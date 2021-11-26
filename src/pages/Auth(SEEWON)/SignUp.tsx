import React from 'react';
import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import styled from 'styled-components';

const SignUp = () => {
  return (
    <Wrapper>
      <InputContainer>
        <Nickname>
          <Input
            required
            type="email"
            placeholder="E-mail"
            size="xlarge"
            color="secondary"
          />
        </Nickname>
        <Nickname>
          <Input
            type="text"
            placeholder="닉네임"
            size="xlarge"
            color="secondary"
          />
        </Nickname>
        <Password>
          <Input
            type="password"
            placeholder="비밀번호"
            size="xlarge"
            color="secondary"
          />
        </Password>
      </InputContainer>
      <ButtonContainer>
        <Button color="secondary" auto ghost>
          회원가입
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

const Nickname = styled.div`
  margin: 20px;
`;

const Password = styled(Nickname)``;

export default SignUp;
