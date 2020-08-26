import { combineReducers } from "redux";
import loginReducer from "./reducers/login";
import searchReducer from "./reducers/search";

const rootReducers = combineReducers({
  loginReducer,
  searchReducer
});

export default rootReducers;