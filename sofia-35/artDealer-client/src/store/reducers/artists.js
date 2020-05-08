import { ARTISTS_FETCHED } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case ARTISTS_FETCHED:
      return action.artists;

    default:
      return state;
  }
}
