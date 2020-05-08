import request from "superagent";

const baseUrl = "http://localhost:4000";

export const addOnlineStore = (link, productId, countryId) => (dispatch) => {
  request
    .post(`${baseUrl}/online_store`)
    // .set("Authorization", `Bearer ${token}`)
    .send({ link, productId, countryId })
    .then((res) => {
      dispatch(storeAdded(res.body));
    })
    .catch(console.error);
};
function storeAdded(newOnlineStore) {
  return {
    type: "ADD_ONLINE_STORE",
    newOnlineStore,
  };
}

export const likeOnlineStore = (userId, onlineStoreId) => (dispatch) => {
  request
    .post(`${baseUrl}/user_online_store`)
    // .set("Authorization", `Bearer ${token}`)
    .send({ userId, onlineStoreId })
    .then((res) => {
      console.log("created", res.body);
    })
    .catch(console.error);
};

export const dislikeOnlineStore = (userId, onlineStoreId) => (dispatch) => {
  request
    .delete(`${baseUrl}/user_online_store`)
    // .set("Authorization", `Bearer ${token}`)
    .send({ userId, onlineStoreId })
    .then((res) => {
      console.log("deleted", res.body);
    })
    .catch(console.error);
};
