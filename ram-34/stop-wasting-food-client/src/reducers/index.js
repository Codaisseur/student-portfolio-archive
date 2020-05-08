import { combineReducers } from "redux";
import user from "./user";
import product from "./product";
import order from "./order";

export default combineReducers({
  user,
  product,
  order
});
