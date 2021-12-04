import { Button, Form, Input } from 'antd';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginPayloadI } from '../../app/auth/types';
import { Col } from '../../components/Containers';
import useAuth from '../../hooks/useAuth';
import styled from 'styled-components';

const Login = () => {
  const { postLogin, loginSuccess } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (loginSuccess) {
      navigate('/vote');
    }
  }, [loginSuccess]);

  const onSubmitHandler = (e: LoginPayloadI) => {
    postLogin(e);
  };

  const goSignUp = () => {
    navigate('/sign-up');
  };

  return (
    <Container>
      <Form
        name="basic"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
        onFinish={onSubmitHandler}
        //   onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Button
          style={{
            alignSelf: 'flex-end',
            marginBottom: '24px',
          }}
          onClick={goSignUp}
        >
          Go to Sign Up!
        </Button>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,

              message: 'Please input your password!',
            },
            {
              min: 8,
              message: '8글자 이상 입력해주세요',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!/^[a-zA-Z0-9]+$/.test(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('특수 문자를 포함해주세요'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          style={{ alignSelf: 'flex-end' }}
        >
          Login
        </Button>
      </Form>
    </Container>
  );
};

const Container = styled(Col)`
  justify-content: center;
  align-items: center;

  height: 100vh;

  margin: 0 10%;
`;

export default Login;
