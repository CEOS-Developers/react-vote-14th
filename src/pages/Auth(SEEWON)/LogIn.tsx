import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import styled from 'styled-components';
import SignIn from './SignIn';
import SignUp from './SignUp';

const LogIn = () => {
  const [isMember, setIsMember] = useState(true);

  return (
    <Container>
      <Button.Group color="secondary" light>
        <Button
          onClick={() => {
            setIsMember(!isMember);
          }}
          disabled={isMember ? true : false}
        >
          이미 회원이신가요?
        </Button>
        <Button
          onClick={() => {
            setIsMember(!isMember);
          }}
          disabled={isMember ? false : true}
        >
          아직 계정이 없나요?
        </Button>
      </Button.Group>
      {isMember ? <SignIn /> : <SignUp />}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default LogIn;
