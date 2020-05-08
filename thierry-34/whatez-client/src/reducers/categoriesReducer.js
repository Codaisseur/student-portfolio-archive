import { All_CATEGORIES } from "../actions/categoriesActions";


export default (state = [], action = {}) => {
  switch (action.type) {
    case All_CATEGORIES:
      return action.payload;
    
    default:
      return state;
  }
};