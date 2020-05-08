import React from "react";
import { GoogleMap, withGoogleMap } from "react-google-maps";
// import { usePosition } from "./UserLocation";
import Markers from "./Markers";

export default function Map({ product }) {
  // const { latitude, longitude } = usePosition();
  const locations = product.Location;

  const centerLAT = locations
    .map((store) => Number(store.coordinate_lat).toFixed(4))
    .reduce((sum, lat) => sum + Number(lat) / locations.length, 0);

  const centerLNG = locations
    .map((store) => Number(store.coordinate_lng).toFixed(4))
    .reduce((sum, lng) => sum + Number(lng) / locations.length, 0);

  const Map = withGoogleMap(() => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{
        lat: centerLAT ? Number(centerLAT) : 52.370216,
        lng: centerLNG ? Number(centerLNG) : 4.895168,
      }}
    >
      <Markers locations={locations} />
    </GoogleMap>
  ));

  return (
    <Map
      googleMapURL={`
          https://maps.googleapis.com/maps/api/js?v=weekly&key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ width: `1200px`, height: `500px` }} />}
      mapElement={<div style={{ width: `1200px`, height: `500px` }} />}
    />
  );
}
