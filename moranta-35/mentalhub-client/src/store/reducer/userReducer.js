const initialState = {
  auth: "",
  createdUser: "",
  username: "",
  userId: 0,
  practician: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "JWT":
      return {
        ...state,
        auth: payload.jwt,
        username: payload.username,
        userId: payload.userId,
        practician: payload.practician
      };
    case "NEW_USER":
      return { ...state, createdUser: payload };
    default:
      return state;
  }
};
