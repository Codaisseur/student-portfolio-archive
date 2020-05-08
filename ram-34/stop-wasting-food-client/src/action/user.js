import axios from "axios";

export const USER_CREATED = "USER_CREATED";
export const USER_CREATE_FAILED = "USER_CREATE_FAILED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

function signUpSuccess() {
  return { type: USER_CREATED };
}
function signUpFailed() {
  return { type: USER_CREATE_FAILED };
}

export function logout() {
  return { type: LOGOUT };
}

export function signUp(signupFormData, history) {
  return async function(dispatch, getState) {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user`,
        { ...signupFormData }
      );
      if (response.status === 201) {
        dispatch(signUpSuccess());
        dispatch(history.push("/login"));
      }
    } catch (error) {
      console.error(error);
      dispatch(signUpFailed());
    }
  };
}

function loginSuccess(name, email, token, id, roleId) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      name: name,
      email: email,
      token: token,
      id: id,
      roleId: roleId
    }
  };
}

export function login(email, password, history) {
  return async function(dispatch, getState) {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/login`,
      {
        email,
        password
      }
    );
    dispatch(
      loginSuccess(
        response.data.name,
        response.data.email,
        response.data.token,
        response.data.id,
        response.data.roleId
      )
    );
    history.push("/products");
  };
}
