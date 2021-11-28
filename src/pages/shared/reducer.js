const initialState = {
  isLoggedin: false,
  email: 'NotLoggedIn',
  nickname: 'NotLoggedIn',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        isLoggedin: true,
        email: 'blabla',
        nickname: 'blabla',
      };
    }

    default:
      return state;
  }
};

export default reducer;
