import { apiUrl } from "../../config/constants";
import axios from "axios";
import { setMessage } from "../appState/actions";

export const fetchStoryById = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/stories/story/${id}`);

      dispatch({ type: "STORY_BY_ID", payload: response.data });
    } catch (e) {
      console.log("error: ", e);
      dispatch(setMessage("danger", true, e.response.data.message));
    }
  };
};

export const updateParagraphRead = (storyId, paragraphNumber, timesRead) => {
  return async (dispatch, getState) => {
    try {
      await axios.patch(`${apiUrl}/stories/update/paragraph/read`, {
        storyId,
        paragraphNumber,
        timesRead: timesRead + 1
      });

    } catch (e) {
      console.log("error: ", e);
    }
  };
};

export const fetchFirstParagraph = (id, paragraphNumber) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        `${apiUrl}/stories/paragraph/${id}/${paragraphNumber}`
      );
      
      //could make if statement to dispatch first para if paranumber === 1, to keep DRY.
      dispatch({ type: "FIRST_PARAGRAPH", payload: response.data });
      dispatch(updateParagraphRead(id, paragraphNumber, response.data.timesRead));
    } catch (e) {
      console.log("error:", e);
      dispatch(setMessage("danger", true, e.response.data.message));
    }
  };
};

export const fetchNextParagraph = (id, paragraphNumber) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        `${apiUrl}/stories/paragraph/${id}/${paragraphNumber}`
      );
      dispatch({ type: "NEXT_PARAGRAPH", payload: response.data });
      dispatch(updateParagraphRead(id, paragraphNumber, response.data.timesRead));
    } catch (e) {
      dispatch({ type: "LAST_PARAGRAPH" });
    }
  };
};

export const updateTitleClicked = (id, titleClicked) => {
  return async (dispatch, getState) => {
    try {
      await axios.patch(`${apiUrl}/stories/clicktitle`, {
        id,
      });
    } catch (e) {
      console.log("error", e);
    }
  };
};
