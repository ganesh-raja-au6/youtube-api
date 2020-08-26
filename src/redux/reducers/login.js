import { LOGIN_USER, LOGOUT_USER } from "../actionTypes";

const initialState = {
  user: JSON.parse(localStorage.getItem('youtube-api')) || null,
};

const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_USER:
      localStorage.setItem('youtube-api', JSON.stringify(payload))
      return { ...state, user: payload };
    case LOGOUT_USER:
      console.log(payload)
      return { ...state, user: null };
    default:
      return state;
  }
};

export default loginReducer;
