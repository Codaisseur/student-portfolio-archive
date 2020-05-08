import axios from "../axios";

export const All_ADDITIVES = "All_ADDITIVES";
export const SHOW_ONE_ADDITIVE = "SHOW_ONE_ADDITIVE";


function showAllAdditivesSuccess(additives) {
  return {
    type: All_ADDITIVES,
    payload: additives
  };
}
export const showAllAdditives = () => {
  return async function(dispatch) {
    const response = await axios(`/additives`);
    // console.log("==================>>>  response.data @additivesAction", response.data);
    dispatch(showAllAdditivesSuccess(response.data));
  };
};

function showOneAdditiveSuccess(additive) {
  return {
    type: SHOW_ONE_ADDITIVE,
    payload: additive
  };
}
export const showOneAdditive = code => {
  return async function(dispatch) {
    await axios(`/additives/${code}`)
      .then(response => {
        dispatch(showOneAdditiveSuccess(response.data));
      })
      .catch(console.error);
  };
};