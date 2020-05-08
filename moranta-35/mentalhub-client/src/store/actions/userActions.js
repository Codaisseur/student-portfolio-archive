import request from "superagent";

// export const baseUrl = "http://localhost:4000";
export const baseUrl = "https://hidden-falls-55871.herokuapp.com";

export const getJwt = payload => ({
  type: "JWT",
  payload
});

export const newUser = payload => ({
  type: "NEW_USER",
  payload
});

export const login = (mail, pass) => async dispatch => {
  try {
    const response = await request
      .post(`${baseUrl}/login`)
      .send({ email: mail, password: pass });
    console.log(response.body);
    const action = getJwt(response.body);
    dispatch(action);
  } catch (error) {
    console.error(error);
  }
};

export const signup = data => async dispatch => {
  try {
    const response = await request.post(`${baseUrl}/signup`).send(data);
    const action = newUser(response.body);
    dispatch(action);
  } catch (error) {
    console.error(error);
  }
};
