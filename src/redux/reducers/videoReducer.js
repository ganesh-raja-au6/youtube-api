import { SET_VIDEOS, TOGGLE_FETCH } from "../actionTypes";

const initialState = {
  videos: null,
  isFetching: false,
};

const videoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_VIDEOS:
      return { ...state, videos: payload };
    case TOGGLE_FETCH:
      return { ...state, isFetching: !state.isFetching };
    default:
      return state;
  }
};

export default videoReducer;
