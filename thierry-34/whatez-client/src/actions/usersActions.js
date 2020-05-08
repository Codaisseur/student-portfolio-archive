import axios from "axios";
export const LOGIN_SUCCES = "LOGIN_SUCCES";
export const SIGNUP_SUCCES = "SIGNUP_SUCCES";
export const LOGOUT_USER = "LOGOUT_USER";

function loginSucces(resp) {
  const { id, token, username, email } = resp;
  console.log(`--  LOG IN SUCCESS  --`);
  return {
    type: LOGIN_SUCCES,
    payload: {
      id: id,
      token: token,
      username: username,
      email: email
    }
  };
}
export function userLogin(email, password, history) {
  // console.log(`--  LOGGING IN  --`, email, password);
  return (dispatch, getState) => {
    axios
      .post("http://localhost:5000/user/login", { email, password })
      .then(resp => {
        dispatch(loginSucces(resp.data));
        history.push("/info");
        // console.log("LOGIN SUCCESSFUL");
      })
      .catch(error => console.error("error", error));
  };
}

function signUpSuccess(resp) {
  const { password, username, email } = resp;
  console.log(`--  SIGN UP SUCCESS  --`);
  return {
    type: SIGNUP_SUCCES,
    payload: {
      token: password,
      username: username,
      email: email
    }
  };
}
export function userSignUp(username, email, password) {
  // console.log(`--  SIGNING UP  --`);
  return (dispatch, getState) => {
    axios
      .post("http://localhost:5000/user/signup", { username, email, password })
      .then(resp => dispatch(signUpSuccess(resp.data)))
      .catch(error => console.error("error", error));
  };
}

export function logOut() {
  return {
    type: LOGOUT_USER
  };
}