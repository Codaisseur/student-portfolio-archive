import { ARTFORMS_FETCHED } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case ARTFORMS_FETCHED:
      return action.artForms;

    default:
      return state;
  }
}
