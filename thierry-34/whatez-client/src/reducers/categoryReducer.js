import { SHOW_ONE_CATEGORY } from "../actions/categoriesActions";


export default (state = [], action = {}) => {
  switch (action.type) {
    
    case SHOW_ONE_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};