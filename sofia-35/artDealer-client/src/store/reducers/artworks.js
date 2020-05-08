import { ARTWORKS_FETCHED } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case ARTWORKS_FETCHED:
      return action.artworks;

    default:
      return state;
  }
}
