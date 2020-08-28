import { SET_USER, ISAUTHENTICATED, LOGOUT_USER } from "../actionTypes";
const initialState = {
  user: JSON.parse(localStorage.getItem("yuser")) || null,
  isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      localStorage.setItem("yuser", JSON.stringify(payload))
      return { ...state, user: payload };
    case ISAUTHENTICATED:
      return { ...state, isAuthenticated: !state.isAuthenticated };
    case LOGOUT_USER:
      localStorage.removeItem('yuser')
      return { ...state, user: null };
    default:
      return state;
  }
};

export default userReducer;
