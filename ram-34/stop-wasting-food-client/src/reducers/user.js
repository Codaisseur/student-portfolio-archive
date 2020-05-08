import {
  USER_CREATED,
  LOGIN_SUCCESS,
  LOGOUT,
  USER_CREATE_FAILED
} from "../action/user";

const initialState = {
  userCreated: null,
  user: { email: null, token: null, id: null, roleId: null }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_CREATED:
      return { ...state, userCreated: true };
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    case USER_CREATE_FAILED:
      return { ...state, userCreated: false };
    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};
