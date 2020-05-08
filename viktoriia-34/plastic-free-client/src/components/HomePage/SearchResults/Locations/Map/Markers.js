import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Marker, InfoWindow } from "react-google-maps";
import { Link } from "react-router-dom";
import {
  likeLocation,
  dislikeLocation,
} from "../../../../../store/location/actions";
const selectUser = (reduxState) => {
  return reduxState.session.user;
};
export default function Markers({ locations }) {
  const [selectedMarker, setMarker] = useState(null);
  const dispatch = useDispatch();

  const setSelectedMarker = (location) => {
    setMarker(location);
  };

  const user = useSelector(selectUser);
  const likedLocations = user && user.Location;

  const allLocId = locations && locations.map((l) => l.id);
  const likedLocId = likedLocations && likedLocations.map((l) => l.id);
  let filteredLocationsId =
    likedLocId && likedLocId.filter((liked) => allLocId.includes(liked));
  // const liked = likedLocations.filter((loc) =>
  //   filteredLocationsId.includes(loc.id)
  // );
  // console.log("liked", liked);

  const setLike = (id) => {
    console.log(user.id, id);
    if (filteredLocationsId && filteredLocationsId.includes(id)) {
      dispatch(dislikeLocation(user.id, id));
    } else {
      dispatch(likeLocation(user.id, id));
    }
  };

  return (
    <div>
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={{
            lat: Number(location.coordinate_lat),
            lng: Number(location.coordinate_lng),
          }}
          onClick={(e) => setSelectedMarker(location)}
          // icon={{
          //   url: `3.png`,
          // }}
        ></Marker>
      ))}
      {selectedMarker && (
        <InfoWindow
          position={{
            lat: Number(selectedMarker.coordinate_lat),
            lng: Number(selectedMarker.coordinate_lng),
          }}
          onCloseClick={(e) => setMarker(null)}
        >
          <div>
            <Link to={`/location/${selectedMarker.id}`}>
              <b>{selectedMarker.name}</b>
            </Link>
            {filteredLocationsId &&
            filteredLocationsId.includes(selectedMarker.id) ? (
              <img
                className="likeButton"
                src="/img/like.png"
                onClick={(e) => setLike(selectedMarker.id)}
              ></img>
            ) : (
              <img
                className="likeButton"
                src="/img/dislike.png"
                onClick={(e) => setLike(selectedMarker.id)}
              ></img>
            )}
          </div>
        </InfoWindow>
      )}
    </div>
  );
}
