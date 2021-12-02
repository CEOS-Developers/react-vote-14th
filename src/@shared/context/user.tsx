import * as React from 'react';
import Login from '../../pages/login/login';

// user type 설정
type user = {
  id: string | undefined;
  token: string | undefined;
};

//defaultUser 설정
const defaultUser: user = {
  id: undefined,
  token: undefined,
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
  | { type: 'set_user'; id: user['id']; password: user['token'] };

// reducer 설정
function reducer(state: user, action: Action) {
  switch (action.type) {
    case 'get_user':
      return state;
    case 'set_user':
      return { ...state, id: action.id, token: action.password };
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
      {user.token ? props.children : <Login />}
    </userContext.Provider>
  );
};
