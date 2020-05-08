//add  error:
export const displayError = payload => {
  return {
    type: "ERROR_MESSAGE",
    payload
  };
};
// remove error:
export const removeError = () => {
  return {
    type: "REMOVE_ERROR"
  };
};
// error handling function
export const errorHandling = async (dispatch, error) => {
  if (error.response) {
    await dispatch(removeError());
    if (error.response.body && error.response.body.message) {
      const errorMessage = displayError(error.response.body.message);
      return dispatch(errorMessage);
    } else if (error.response.body) {
      const validationError = displayError(error.response.body);
      return dispatch(validationError);
    } else {
      const basicError = displayError(error.response.text);
      return dispatch(basicError);
    }
  }
  console.error(error);
};
