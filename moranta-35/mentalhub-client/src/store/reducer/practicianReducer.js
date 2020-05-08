const initialState = {
  displayedPractician: null,
  list: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SINGLE_PRACTICIAN":
      return { ...state, displayedPractician: payload };
    case "FETCH_PRACTICIANS":
      return { ...state, list: payload.rows };
    default:
      return state;
  }
};
