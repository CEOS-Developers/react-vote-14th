import React, { PropsWithChildren, useContext } from 'react';
import { userContext } from '../context/user';

const useUser = () => {
  const { user, dispatch } = useContext(userContext);

  const getUser = () => {
    dispatch({ type: 'get_user' });
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

  const logIn = (id: string | undefined, password: string | undefined) => {
    dispatch({ type: 'log_in', id, password });
  };

  const logOut = () => {
    dispatch({ type: 'log_out' });
  };

  return { getUser, setUser, signUp, logIn, logOut };
};

export default useUser;
