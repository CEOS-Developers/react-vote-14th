import React, { PropsWithChildren, useContext } from 'react';
import { userContext } from '../context/user';

const useUser = () => {
  const { user, dispatch } = useContext(userContext);

  const getUser = () => {
    return user;
  };

  const setUser = (id: string | undefined, password: string | undefined) => {
    dispatch({ type: 'set_user', id: id, password: password });
  };

  const signUp = (
    id: string | undefined,
    password: string | undefined,
    email: string | undefined
  ) => {
    dispatch({ type: 'sign_up', id: id, password: password, email: email });
  };

  return { getUser, setUser, signUp };
};

export default useUser;
