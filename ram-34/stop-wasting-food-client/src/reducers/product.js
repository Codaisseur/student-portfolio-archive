import { PRODUCTS_FETCHED, PRODUCT_FETCHED } from "../action/product";
import { LOGOUT } from "../action/user";
export default (state = [], action) => {
  switch (action.type) {
    case PRODUCTS_FETCHED:
      return [...action.payload];
    case PRODUCT_FETCHED:
      return [...state, action.payload];
    // const newProducts = [...state, action.payload];
    // return [...new Map(newProducts.map(item => [item["id"], item])).values()];
    case LOGOUT:
      return [];
    default:
      return state;
  }
};
