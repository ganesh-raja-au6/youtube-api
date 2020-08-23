import { combineReducers } from "redux";
import loginReducer from "./reducers/login";

const rootReducers = combineReducers({
  loginReducer,
});

export default rootReducers;