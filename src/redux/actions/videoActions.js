import axios from "axios";
import { SET_VIDEOS, TOGGLE_FETCH } from "../actionTypes";
import { keys } from "../../config.js";

export const setVideos = () => async (dispatch) => {
  try {
    dispatch({ type: TOGGLE_FETCH });
    const { data } = await axios(
      `${keys.BASEURL}/videos?part=snippet&key=${keys.GOOGLE_API_KEY}&chart=mostPopular&maxResults=5`
    );
    dispatch({ type: SET_VIDEOS, payload: data });
  } catch (err) {
    console.log(err.message);
  } finally {
    dispatch({ type: TOGGLE_FETCH });
  }
};