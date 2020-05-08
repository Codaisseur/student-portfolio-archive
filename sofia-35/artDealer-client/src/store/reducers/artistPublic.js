import { ARTIST_INFO_FETCHED } from "../actions/index";
// public state of Artist
export default function(state = {}, action) {
  switch (action.type) {
    case ARTIST_INFO_FETCHED:
      return action.artist;
    default:
      return state;
  }
}
