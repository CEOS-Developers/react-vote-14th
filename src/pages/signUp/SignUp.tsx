import React from 'react';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import { Col } from '../../components/Containers';
import useAuth from '../../hooks/useAuth';
import { SignUpPayloadI } from '../../app/auth/auth';

const SignUp = () => {
  const { postSignUp } = useAuth();

  const onSubmitHandler = (e: SignUpPayloadI) => {
    postSignUp(e);
  };

  return (
    <Container>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '80%',
          height: '100%',
          margin: 'auto',
        }}
        onFinish={onSubmitHandler}
        //   onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password1"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="password2"
          rules={[{ required: true, message: 'Confirm your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

const Container = styled(Col)`
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  margin: auto;
`;

export default SignUp;
