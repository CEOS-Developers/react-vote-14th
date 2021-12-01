// 액션 타입 정의
const SET_LOGINSTATE = 'SET_LOGINSTATE';
const SET_USER_DATA = 'SET_USER_DATA';

//액션 생성함수 만들기
export const setLoginState = () => ({ type: SET_LOGINSTATE });
export const setUserData = (nickname, email) => ({
  type: SET_USER_DATA,
  nickname,
  email,
});

//초기 상태 선언
const initialState = {
  isLoggedin: false,
  nickname: '',
  email: '',
};

//리듀서 선언
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGINSTATE: {
      return {
        ...state,
        isLoggedin: true,
      };
    }
    case SET_USER_DATA: {
      return {
        ...state,
        nickname: action.nickname,
        email: action.email,
      };
    }
    default:
      return state;
  }
}
