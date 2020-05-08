import axios from "../axios";

export const SHOT_CREATE_SUCCESS = "SHOT_CREATE_SUCCESS";
export const FETCH_SHOTS_SUCCESS = "FETCH_SHOTS_SUCCESS";

function createShotSuccess(shot) {
  return {
    type: SHOT_CREATE_SUCCESS,
    payload: {
      shot: shot
    }
  };
}

export const createShot = (formData, history) => {
  return async function(dispatch, getState) {
    const token = getState().user.user.token;

    console.log("TOKEN: ", token);

    axios
      .post("/shots/new", formData, {
        headers: { Authorization: `Bearer ${token}` },
        timeout: 240000
      })
      .then(resp => {
        dispatch(createShotSuccess(resp.data));
        console.log("SHOT CREATION SUCCESSFUL", resp.data);
        console.log("THIS SHOT'S ARRAY:", resp.data.arrayE)
        history.push("/chart");
      })
      .catch(error => console.error("error", error));
  };
};

export const getShots = () => {
  return async function(dispatch, getState) {
    axios
      .get("/shots")
      .then(resp => {
        dispatch(fetchShotSuccess(resp.data));
        console.log("GET ALL SHOTS DATA SUCCESSFULL: ", resp.data);
        // console.log("GET ALL SHOTS ARRAY SUCCESSFULL: ", resp.data.arrayE);
      })
      .catch(error => console.error("error", error));
  };
};

function fetchShotSuccess(shots) {
  return {
    type: FETCH_SHOTS_SUCCESS,
    payload: shots
  };
}
