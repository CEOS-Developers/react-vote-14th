import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import styled from 'styled-components';
import { userContext } from '../../@shared/context/user';
import useUser from '../../@shared/hooks/useUser';
import { Button, Input, Spacer, Checkbox } from '@nextui-org/react';
import { FormElement } from '@nextui-org/react/esm/input/input-props';

const Login = (props: PropsWithChildren<{}>) => {
  type id = string | undefined;
  type password = string | undefined;
  type email = string | undefined;
  type loginInfo = { id: id; password: password; email: email };
  const [loginInfo, setLoginInfo] = useState<loginInfo>({
    id: undefined,
    password: undefined,
    email: undefined,
  });

  const [checked, setChecked] = useState(false);

  const { setUser, signUp, logIn } = useUser();

  const handleChange:
    | ((e: React.ChangeEvent<FormElement>) => void)
    | undefined = (event) => {
    const {
      target: { name, value },
    } = event;

    switch (name) {
      case 'id':
        setLoginInfo({ ...loginInfo, id: value });
        break;
      case 'password':
        setLoginInfo({ ...loginInfo, password: value });
        break;
      case 'email':
        setLoginInfo({ ...loginInfo, email: value });
        break;
      default:
    }
  };

  const handleCheck = () => {
    setChecked(() => !checked);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  const handleClickLogin: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    logIn(loginInfo.id, loginInfo.password);
  };
  const handleClickSignUp: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    signUp(loginInfo.id, loginInfo.password, loginInfo.email);
  };

  return (
    <LogInContainer onSubmit={handleSubmit}>
      <TitleContainer>
        👑
        <TextHighLight>CEOS</TextHighLight>
        <LogInTitle>다음 짱은 누구</LogInTitle>❓
      </TitleContainer>
      <Spacer y={2.5} />
      <Input
        name="id"
        labelPlaceholder="ID"
        onChange={handleChange}
        color="primary"
        bordered={true}
        width="250px"
      />
      <Spacer y={1.5} />
      <Input.Password
        name="password"
        labelPlaceholder="Password"
        onChange={handleChange}
        width="250px"
        color="primary"
        bordered={true}
      />
      <Spacer y={1} />
      <Button onClick={handleClickLogin} size="large">
        로그인
      </Button>
      <Spacer y={1} />
      <Checkbox color="gradient" checked={checked} onClick={handleCheck}>
        계정이 없으신가요?
      </Checkbox>
      <Spacer y={1.5} />
      {(() => {
        if (checked) {
          return (
            <>
              <Input
                name="email"
                labelPlaceholder="E-mail"
                onChange={handleChange}
                color="primary"
                bordered={true}
                width="250px"
              />
              <Spacer y={1} />
              <Button onClick={handleClickSignUp} size="large">
                회원가입
              </Button>
            </>
          );
        }
      })()}
    </LogInContainer>
  );
};

const LogInContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  font-size: 25px;
`;
const LogInTitle = styled.div`
  font-weight: bold;
  margin: 0 5px;
`;
const TextHighLight = styled.div`
  color: #0b0ba5;
  font-weight: bold;
  margin: 0 5px;
`;

export default Login;
