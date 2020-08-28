import { SET_USER, ISAUTHENTICATED, LOGOUT_USER } from "../actionTypes";

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const isAuthenticated = () => {
  return {
    type: ISAUTHENTICATED,
  };
};

export const logout = () => {
  return {
    type : LOGOUT_USER
  }
}