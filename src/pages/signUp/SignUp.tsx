import React, { ChangeEvent, useState } from 'react';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import { Col } from '../../components/Containers';
import useAuth from '../../hooks/useAuth';
import { SignUpPayloadI } from '../../app/auth/types';

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
          width: '100%',
          height: '100%',
        }}
        onFinish={onSubmitHandler}
        //   onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
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
          name="password1"
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

        <Form.Item
          label="Confirm Password"
          name="password2"
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (value && getFieldValue('password1') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('Please Confirm your Password'),
                );
              },
            }),
            {
              required: true,
              message: 'Please input your Password again',
            },
          ]}
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

  height: 100vh;

  margin: 0 10%;
`;

export default SignUp;
