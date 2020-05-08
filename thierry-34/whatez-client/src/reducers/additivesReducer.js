import { All_ADDITIVES } from "../actions/additivesActions";


export default (state = [], action = {}) => {
  switch (action.type) {
    case All_ADDITIVES:
      return action.payload;
    
    default:
      return state;
  }
};