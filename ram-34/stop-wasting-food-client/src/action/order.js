import axios from "axios";

export const ORDER_CREATED = "ORDER_CREATED";

function orderCreated(orderDetail) {
  return { type: ORDER_CREATED, payload: orderDetail };
}

export const reserveOrder = (reserveOrderData, token) => async dispatch => {
  console.log("checking order parameter", reserveOrderData, token);

  try {
    const response = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BACKEND_URL}/order`,
      headers: { authorization: `Bearer ${token}` },
      data: reserveOrderData
    });
    dispatch(orderCreated(response.data));
    console.log("Checking response from order", response);
  } catch (error) {
    console.log("Error in reserving", error);
  }
};
