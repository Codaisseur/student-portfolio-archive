import { ARTWORK_INFO_FETCHED } from "../actions/index";

export default function (state = {}, action) {
  switch (action.type) {
    case ARTWORK_INFO_FETCHED:
      return action.artwork;
    default:
      return state;
  }
}
