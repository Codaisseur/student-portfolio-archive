import request from "superagent";
import databaseUrl from "../constants";
export const NEW_EMAIL = "NEW_EMAIL";

function newEmail(payload) {
  return {
    type: NEW_EMAIL,
    payload
  };
}

export const createEmail = (emailData, ownerEmail) => (dispatch, getState) => {
  // console.log("*****", emailData, ownerEmail);
  // console.log("email getState", getState().user);
  const token = getState().user.token;
  const data = { ...emailData, ownerEmail };

  request
    .post(`${databaseUrl}/sendMail`)
    .set("Authorization", `Bearer ${token}`)
    .send(data)
    .then(response => {
      const action = newEmail(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
