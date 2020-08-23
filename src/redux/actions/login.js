import { LOGIN_USER, LOGOUT_USER } from "../actionTypes";

export const login = (user) => {
    return {
        type : LOGIN_USER,
        payload : user
    }
}

export const logout = () => {
    return {
        type : LOGOUT_USER
    }
}