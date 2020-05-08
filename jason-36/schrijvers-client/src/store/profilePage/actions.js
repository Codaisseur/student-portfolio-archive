import { apiUrl } from "../../config/constants";
import axios from "axios";
import { setMessage } from "../appState/actions";

export const storiesByUser = userId => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/stories/user/${userId}`)
      
      dispatch({type: 'STORIES_BY_USERID', payload: response.data})
    }
    catch (e) {
      console.log("error:", e);
      dispatch(setMessage("danger", true, e.response.data.message))
    }
  }
}

export const logoutProfilePage = () => ({ type: 'LOGOUT_PROFILEPAGE'})