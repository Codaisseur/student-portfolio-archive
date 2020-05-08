import { apiUrl } from "../../config/constants";
import axios from "axios";
import { setMessage } from '../appState/actions';

export const fetchStoryInfo = (userId, storyId) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/stories/user/story/${userId}/${storyId}`)
      dispatch({type: 'STORY_INFO_SUCCES', payload: response.data })
    }
    catch (e) {
      console.log("error: ", e);
      dispatch(setMessage("danger", true, e.response.data.message))
    }
  }
}
