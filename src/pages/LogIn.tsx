import React from 'react';
import { Input } from '@nextui-org/react';
import styled from 'styled-components';

const LogIn = () => {
  return (
    <Container>
      <Nickname>
        <Input label="닉네임" labelPlaceholder="ex) SEEWON" />
      </Nickname>
      <Password>
        <Input.Password labelPlaceholder="Password" />
      </Password>
    </Container>
  );
};

const Nickname = styled.div``;

const Password = styled.div``;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default LogIn;
