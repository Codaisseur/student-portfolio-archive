import { ARTIST_FETCHED } from "../actions";
// private state of logged in Artist
export default function(state = {}, action) {
  switch (action.type) {
    case ARTIST_FETCHED:
      return action.artist;
    default:
      return state;
  }
}
