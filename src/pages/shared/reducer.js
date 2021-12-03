// 액션 타입 정의
const SET_LOGINSTATE = "SET_LOGINSTATE";
const SET_USER_DATA = "SET_USER_DATA";
const SET_VOTE_ID = "SET_VOTE_ID";

//액션 생성함수 만들기
export const setLoginState = (id) => ({ type: SET_LOGINSTATE, id });
export const setUserData = (nickname, email) => ({
  type: SET_USER_DATA,
  nickname,
  email,
});

export const setVoteID = (voteId) => ({
  type: SET_VOTE_ID,
  voteId,
});

//초기 상태 선언
const initialState = {
  isLoggedin: false,
  id: 0,
  nickname: "",
  email: "",
  voteId: 0,
};

//리듀서 선언
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGINSTATE: {
      return {
        ...state,
        isLoggedin: true,
        id: action.id,
      };
    }
    case SET_USER_DATA: {
      return {
        ...state,
        nickname: action.nickname,
        email: action.email,
      };
    }
    case SET_VOTE_ID: {
      return {
        ...state,
        voteId: action.voteId,
      };
    }
    default:
      return state;
  }
}
