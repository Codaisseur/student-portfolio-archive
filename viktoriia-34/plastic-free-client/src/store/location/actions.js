import request from "superagent";

const baseUrl = "http://localhost:4000";

export const addLocation = (newLocation, productId) => (dispatch) => {
  request
    .post(`${baseUrl}/location`)
    // .set("Authorization", `Bearer ${token}`)
    .send({ newLocation, productId })
    .then((res) => {
      dispatch(locationAdded(res.body));
    })
    .catch(console.error);
};
function locationAdded(newLocation) {
  return {
    type: "ADD_LOCATION",
    newLocation,
  };
}

export const fetchLocation = (id) => (dispatch) => {
  request(`${baseUrl}/location/${id}`)
    .then((res) => {
      dispatch(locationFetched(res.body));
    })
    .catch(console.error);
};
function locationFetched(location) {
  return {
    type: "ONE_LOCATION",
    location,
  };
}

export const findLocation = (keyword) => (dispatch) => {
  request(`${baseUrl}/location/find/${keyword}`)
    .then((res) => {
      dispatch(locationFound(res.body));
    })
    .catch(console.error);
};
function locationFound(locations) {
  return {
    type: "FIND_LOCATIONS",
    locations,
  };
}

export const likeLocation = (userId, locationId) => (dispatch) => {
  request
    .post(`${baseUrl}/user_location`)
    // .set("Authorization", `Bearer ${token}`)
    .send({ userId, locationId })
    .then((res) => {
      console.log("like created", res.body);
      dispatch(locationLiked(res.body));
    })
    .catch(console.error);
};

export const dislikeLocation = (userId, locationId) => (dispatch) => {
  request
    .delete(`${baseUrl}/user_location`)
    // .set("Authorization", `Bearer ${token}`)
    .send({ userId, locationId })
    .then((res) => {
      console.log("like deleted", res.body);
      dispatch(locationDisliked(res.body));
    })
    .catch(console.error);
};
function locationLiked(data) {
  return {
    type: "LIKED_LOCATION",
    data,
  };
}
function locationDisliked(data) {
  return {
    type: "DISLIKED_LOCATION",
    data,
  };
}
