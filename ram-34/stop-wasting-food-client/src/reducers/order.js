import { ORDER_CREATED } from "../action/order";
import { LOGOUT } from "../action/user";
export default (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATED:
      return { ...action.payload };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};
