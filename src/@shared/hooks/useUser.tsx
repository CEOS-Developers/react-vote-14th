import React, { PropsWithChildren, useContext } from 'react';
import { userContext } from '../context/user';

const useUser = () => {
  const { user, dispatch } = useContext(userContext);

  const getUser = () => {
    return user;
  };

  const setUser = (id: string | undefined, token: string | undefined) => {
    dispatch({ type: 'set_user', id: id, token: token });
  };

  const signUp = (
    id: string | undefined,
    password: string | undefined,
    email: string | undefined
  ) => {
    dispatch({ type: 'sign_up', id: id, password: password, email: email });
  };

  //처음에 dispath로 처리하려다가 비동기함수 실행 문제 때문에 hook으로 처리
  //비동기+동기 혼합코드를 짜지 말고, 둘 다 필요하면 동기처리를 then 안에서 하는 방향으로 코딩하자..
  const logIn = async (id: string | undefined, password: string | undefined) =>
    user.authService
      .login(id, password)
      .then((data) => {
        dispatch({ type: 'set_user', id: id, token: data.token });
      })
      .catch(() => {
        alert('잘못된 접근입니다.');
      });
  const logOut = () => {
    dispatch({ type: 'log_out' });
  };

  return { setUser, signUp, logIn, logOut, getUser };
};

export default useUser;
