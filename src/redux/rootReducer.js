import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import videoReducer from "./reducers/videoReducer";

const rootReducer = combineReducers({
  userReducer,
  videoReducer,
});

export default rootReducer;
