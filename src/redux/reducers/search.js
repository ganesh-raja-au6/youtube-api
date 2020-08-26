import { SEARCH, FETCH } from "../actionTypes";

const initialState = {
  search: null,
  videos: JSON.parse(localStorage.getItem("videos")) || null,
};

const searchReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH:
      return { ...state, search: payload };
    case FETCH:
      localStorage.setItem("videos", JSON.stringify(payload));
      return payload;
    default:
      return state;
  }
};

export default searchReducer;
