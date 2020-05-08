import axios from "../axios";

export const All_CATEGORIES = "All_CATEGORIES";
export const SHOW_ONE_CATEGORY = "SHOW_ONE_CATEGORY";


function showAllCategoriesSuccess(categories) {
  return {
    type: All_CATEGORIES,
    payload: categories
  };
}
export const showAllCategories = () => {
  return async function(dispatch, getState) {
    const response = await axios(`/categories`);
    console.log("==================>>>  response.data @categoriesAction", response.data);
    dispatch(showAllCategoriesSuccess(response.data));
  };
};


function showOneCategorySuccess(category) {
  return {
    type: SHOW_ONE_CATEGORY,
    payload: category
  };
}
export const showOneCategory = id => {
  return async function(dispatch, getState) {
    await axios(`/categories/${id}`)
      .then(response => {
        dispatch(showOneCategorySuccess(response.data));
      })
      .catch(console.error);
  };
};