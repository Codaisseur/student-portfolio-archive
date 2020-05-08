import { SIGNUP_SUCCES, LOGIN_SUCCES, LOGOUT_USER } from "../actions/usersActions";

const initialState = {
  // user: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCES:
      return { ...state, user: { ...payload } };
    case SIGNUP_SUCCES:
      console.log("is user reducer called?", payload);
      return { ...state, user: { ...payload } };
    case 'SIGNOUT_SUCCESS':
      console.log(`================>> SIGNOUT SUCCESS`)
      return state;
    case LOGOUT_USER:
      return {
        user: {}
      };
    default:
      return state;
  }
};
