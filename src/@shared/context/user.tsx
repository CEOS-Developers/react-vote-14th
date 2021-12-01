import * as React from 'react';

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

// context 생성
const context = React.createContext({
  user: defaultUser,
  dispatch: defaultDispatch,
});

//Action type 설정
type Action = { type: 'get_user' };

// reducer 설정
function reducer(state: user, action: Action) {
  switch (action.type) {
    case 'get_user':
      return state;
  }
}

// userProvider 만들기
export const AuthProvider = (props: React.PropsWithChildren<{}>) => {
  const [user, dispatch] = React.useReducer<React.Reducer<user, Action>>(
    reducer,
    defaultUser
  );

  return (
    <context.Provider value={{ user, dispatch }} {...props}>
      {user.token ? props.children : <div>로그인 필요!</div>}
    </context.Provider>
  );
};
