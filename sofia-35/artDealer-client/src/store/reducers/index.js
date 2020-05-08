import { combineReducers } from "redux";
import errors from "./errors";
import artists from "./artists";
import artworks from "./artworks";
import jwt from "./jwt";
import artForms from "./artForms";
import artist from "./artist";
import photos from "./photos";
import artistPublic from "./artistPublic";
import artwork from "./artwork";
import cart from "./cart";

export default combineReducers({
  errors,
  artists,
  artworks,
  jwt,
  artForms,
  artist,
  photos,
  artistPublic,
  artwork,
  cart
});
