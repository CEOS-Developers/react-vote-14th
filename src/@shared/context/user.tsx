import * as React from 'react';
import Login from '../../pages/login/login';
import TokenStorage from '../db/token';
import HttpClient from '../http/httpClient';
import AuthService from '../service/auth';
import VoteService from '../service/vote';

const baseURL = 'http://ec2-13-125-77-192.ap-northeast-2.compute.amazonaws.com';
const tokenStorage = new TokenStorage();
const httpClient = new HttpClient(baseURL);
const authService = new AuthService(httpClient, tokenStorage);
const voteService = new VoteService(httpClient, tokenStorage);

// user type 설정
type user = {
  id: string | undefined;
  token: string | undefined | null;
  authService: AuthService;
  voteService: VoteService;
};

//defaultUser 설정
const defaultUser: user = {
  id: undefined,
  token: undefined,
  authService: authService,
  voteService: voteService,
};

//defaultDispatch 설정
const defaultDispatch: React.Dispatch<Action> = () => null;

// context 생성, useContext를 위해 export
export const userContext = React.createContext({
  user: defaultUser,
  dispatch: defaultDispatch,
});

//Action type 설정
type Action =
  | { type: 'get_user' }
  | { type: 'set_user'; id: user['id']; token: user['token'] }
  | {
      type: 'sign_up';
      id: string | undefined;
      password: string | undefined;
      email: string | undefined;
    }
  | { type: 'log_in'; id: string | undefined; password: string | undefined }
  | { type: 'log_out' };

// reducer 설정
function reducer(state: user, action: Action) {
  switch (action.type) {
    case 'get_user':
      return state;
    case 'set_user':
      return { ...state, id: action.id, token: action.token };
    case 'sign_up': {
      authService.signup(action.id, action.email, action.password);

      return state;
    }
    case 'log_in': {
      const data = authService.login(action.id, action.password);
      return { ...state, id: action.id, token: authService.getToken() };
    }
    case 'log_out': {
      tokenStorage.deleteToken();
      return { ...state, id: undefined, token: authService.getToken() };
    }
  }
}

// userProvider 만들기
export const UserProvider = (props: React.PropsWithChildren<{}>) => {
  const [user, dispatch] = React.useReducer<React.Reducer<user, Action>>(
    reducer,
    defaultUser
  );

  return (
    <userContext.Provider value={{ user, dispatch }} {...props}>
      {authService.getToken() ? props.children : <Login />}
    </userContext.Provider>
  );
};
