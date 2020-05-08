import superagent from "superagent";
import { errorHandling, removeError } from "./errors";

export const baseUrl =
  "https://fast-dawn-59540.herokuapp.com" || "http://localhost:4000";

// actions constants:
export const ARTWORKS_FETCHED = "ARTWORKS_FETCHED";
export const ARTISTS_FETCHED = "ARTISTS_FETCHED";
export const ARTFORMS_FETCHED = "ARTFORMS_FETCHED";
export const ARTIST_FETCHED = "ARTIST_FETCHED";
export const ARTIST_INFO_FETCHED = "ARTIST_INFO_FETCHED";
export const ARTWORK_INFO_FETCHED = "ARTWORK_INFO_FETCHED";
export const ARTWORK_TO_CART = "ARTWORK_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const EMPTY_CART = "EMPTY_CART";

// loading artworks
const artworksFetched = (artworks) => ({
  type: ARTWORKS_FETCHED,
  artworks,
});
export const loadArtworks = (limitValue) => async (dispatch) => {
  try {
    const response = await superagent
      .get(`${baseUrl}/artworks`)
      .query({ limit: limitValue });
    const action = artworksFetched(response.body);
    await dispatch(action);
    dispatch(removeError());
  } catch (error) {
    errorHandling(dispatch, error);
  }
};
// loading artists
const artistsFetched = (artists) => ({
  type: ARTISTS_FETCHED,
  artists,
});
export const loadArtists = (limitValue) => async (dispatch) => {
  try {
    const response = await superagent
      .get(`${baseUrl}/artists`)
      .query({ limit: limitValue });
    const action = artistsFetched(response.body);
    dispatch(action);
  } catch (error) {
    errorHandling(dispatch, error);
  }
};
// loading art artForms
const artFormsFetched = (artForms) => ({
  type: ARTFORMS_FETCHED,
  artForms,
});
export const loadArtForms = () => async (dispatch, getState) => {
  try {
    if (Object.keys(getState().artForms).length) return null;
    const response = await superagent.get(`${baseUrl}/artForms`);
    const action = artFormsFetched(response.body);
    dispatch(action);
  } catch (error) {
    errorHandling(dispatch, error);
  }
};
// loading private info of logged in artist
const artistFetched = (artist) => ({
  type: ARTIST_FETCHED,
  artist,
});
export const loadArtist = (jwt) => async (dispatch) => {
  const reqHeader = "Bearer " + jwt;
  try {
    const artist = await superagent
      .get(`${baseUrl}/secret/loggedArtist`)
      .set("Authorization", reqHeader);
    dispatch(artistFetched(artist.body));
  } catch (error) {
    console.error(error);
  }
};
// creating artwork
const newArtwork = () => ({
  type: "ADD_ARTWORK",
});
export const addArtwork = (data, jwt, history) => async (dispatch) => {
  try {
    const reqHeader = "Bearer " + jwt;
    const artwork = await superagent
      .post(`${baseUrl}/artworks`)
      .set("Authorization", reqHeader)
      .send(data);
    await dispatch(newArtwork());
    await dispatch(removeError());
    if (artwork.status === 200) {
      return history.push("/myPage");
    }
  } catch (error) {
    errorHandling(dispatch, error);
  }
};
// loading public info of an artist
const artistInfoFetched = (artist) => ({
  type: ARTIST_INFO_FETCHED,
  artist,
});
export const loadArtistPublic = (artistId) => async (dispatch) => {
  try {
    const artist = await superagent.get(`${baseUrl}/artists/${artistId}`);
    dispatch(artistInfoFetched(artist.body));
  } catch (error) {
    errorHandling(dispatch, error);
  }
};
// loading artwork info
const artworkInfoFetched = (artwork) => ({
  type: ARTWORK_INFO_FETCHED,
  artwork,
});
export const loadArtwork = (artworkId) => async (dispatch) => {
  try {
    const artwork = await superagent.get(`${baseUrl}/artworks/${artworkId}`);
    dispatch(artworkInfoFetched(artwork.body));
  } catch (error) {
    errorHandling(dispatch, error);
  }
};
// Add to cart
const artworkToCart = (artwork) => ({
  type: ARTWORK_TO_CART,
  payload: {
    id: artwork.id,
    title: artwork.name,
    img: artwork.img,
    artist: {
      artistId: artwork.artistId,
      name: artwork.artist.first_name,
      surname: artwork.artist.last_name,
    },
    price: artwork.price,
    ship_country: artwork.ship_country,
    weight: artwork.weight_kg,
  },
});
export const addToCart = (artwork) => (dispatch) => {
  dispatch(artworkToCart(artwork));
};
// Remove from cart
const artworkFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id,
});
export const removeFromCart = (id) => (dispatch) => {
  dispatch(artworkFromCart(id));
};
// Clear cart
const emptyCart = () => ({
  type: EMPTY_CART,
});
export const clearCart = () => (dispatch) => {
  dispatch(emptyCart());
};
// Delete artwork WIP
// export const deleteArtwork = (artwork, jwt) => (dispatch) => {
//   try {
//     const reqHeader = "Bearer " + jwt;
//   } catch (error) {
//     errorHandling(dispatch, error);
//   }
// };
// Update artwork info
const artworkUpdated = (artwork) => ({
  type: "ARTWORK_UPDATED",
  artwork,
});
export const updateArtwork = (artworkId, jwt, data) => async (dispatch) => {
  try {
    const reqHeader = "Bearer " + jwt;
    console.log(data);
    const artwork = await superagent
      .put(`${baseUrl}/artworks/${artworkId}`)
      .set("Authorization", reqHeader)
      .send(data);
    dispatch(artworkUpdated(artwork.body));
  } catch (error) {
    errorHandling(dispatch, error);
  }
};
