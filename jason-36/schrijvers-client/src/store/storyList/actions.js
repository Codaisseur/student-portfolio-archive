import { apiUrl } from "../../config/constants";
import axios from "axios";
import { setMessage } from "../appState/actions";

export const fetchStories = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/stories`);

      dispatch({ type: "FETCH_STORIES_SUCCES", payload: response.data });
    } catch (e) {
      dispatch(setMessage("danger", true, e.response.data.message));
    }
  };
};
