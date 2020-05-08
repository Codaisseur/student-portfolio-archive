import { SHOT_CREATE_SUCCESS, FETCH_SHOTS_SUCCESS } from "../actions/shotsActions";


export default (state = [], action = {}) => {
  switch (action.type) {
    case SHOT_CREATE_SUCCESS:
      return [...state, action.payload.shot];
    case FETCH_SHOTS_SUCCESS:
      return [...action.payload];

    default:
      return state;
  }
};
