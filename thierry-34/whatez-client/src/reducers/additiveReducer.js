import { SHOW_ONE_ADDITIVE } from "../actions/additivesActions";


export default (state = [], action = {}) => {
  switch (action.type) {
    
    case SHOW_ONE_ADDITIVE:
      return action.payload;
    default:
      return state;
  }
};