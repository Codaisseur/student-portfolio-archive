export const PRODUCT_FETCHED = "PRODUCT_FETCHED";
export const PRODUCTS_FETCHED = "PRODUCTS_FETCHED";

export const productsFetched = productsList => {
  return {
    type: PRODUCTS_FETCHED,
    payload: productsList
  };
};

export const productFetched = productList => {
  return {
    type: PRODUCT_FETCHED,
    payload: productList
  };
};
