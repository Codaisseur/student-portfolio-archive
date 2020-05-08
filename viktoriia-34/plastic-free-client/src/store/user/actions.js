import request from "superagent";

const baseUrl = "http://localhost:4000";

export function logout() {
  return {
    type: "LOGOUT_USER",
  };
}

export const signup = (name, email, password) => {
  return (dispatch) => {
    const data = {
      name: name,
      email: email,
      password: password,
    };
    request
      .post(`${baseUrl}/user`)
      .send(data)
      .then((res) => {
        dispatch(signupSuccess(res.body));
      })
      .catch(console.error);
  };
};
function signupSuccess(payload) {
  return {
    type: "NEW_USER",
    payload,
  };
}

export const login = (email, password) => (dispatch) => {
  const data = {
    email: email,
    password: password,
  };
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then((response) => {
      const jwt = response.body.jwt;
      const user = response.body.userData;
      dispatch(loginSuccess(jwt, user));
    })
    .catch(console.error);
};
function loginSuccess(jwt, user) {
  return {
    type: "LOGIN_SESSION",
    payload: {
      jwt,
      user,
    },
  };
}

export const fetchUser = (id) => (dispatch) => {
  request(`${baseUrl}/user/${id}`)
    .then((res) => {
      console.log("userFetched res.body", res.body);
      dispatch(userFetched(res.body));
    })
    .catch(console.error);
};
function userFetched(user) {
  return {
    type: "FETCH_USER",
    user,
  };
}
