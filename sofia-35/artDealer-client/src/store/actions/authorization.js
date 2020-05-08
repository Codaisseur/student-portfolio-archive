import superagent from "superagent";
import { errorHandling, removeError, displayError } from "./errors";
import { baseUrl } from "./index";

// login
export const JWT = "JWT";
const loginUser = payload => ({
  type: JWT,
  payload
});
export function login(data, history) {
  return async function(dispatch) {
    try {
      const response = await superagent.post(`${baseUrl}/login`).send(data);
      const action = loginUser(response.body.jwt);
      await dispatch(action);
      await dispatch(removeError());
      return history.push("/myPage");
    } catch (error) {
      errorHandling(dispatch, error);
    }
  };
}
// signup
const addUser = () => {
  return {
    type: "ADD_USER"
  };
};
export function signup(data) {
  return async function(dispatch) {
    try {
      const response = await superagent.post(`${baseUrl}/artists`).send(data);
      await dispatch(addUser());
      await dispatch(removeError());
      if (response.status === 200) {
        dispatch(
          displayError(
            "Your account was successfully created. You may now login"
          )
        );
      }
    } catch (error) {
      errorHandling(dispatch, error);
    }
  };
}
