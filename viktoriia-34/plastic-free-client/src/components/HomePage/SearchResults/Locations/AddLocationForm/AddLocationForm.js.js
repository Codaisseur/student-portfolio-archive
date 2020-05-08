import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addLocation } from "../../../../../store/location/actions";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import SearchPlacesInput from "./SearchPlacesInput";

export default function SearchPlaceInput({ product, dataNotFound }) {
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");

  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = (address) => {
    setAddress(address);
    setLocation(address);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createLocation(location);
    setAddress("");
    setLocation("");
  };

  const createLocation = async (address) => {
    const results = await geocodeByAddress(address);
    const city = results[0].address_components.filter(
      (addr) =>
        (addr.types.includes("political") && addr.types.includes("locality")) ||
        (addr.types.includes("political") &&
          addr.types.includes("administrative_area_level_2"))
    )[0].long_name;
    const country = results[0].address_components.filter(
      (addr) =>
        addr.types.includes("political") && addr.types.includes("country")
    )[0].long_name;
    const latLng = await getLatLng(results[0]);
    const newLocation = {
      name: address,
      address: results[0].formatted_address,
      city: city,
      country: country,
      google_place_id: results[0].place_id,
      coordinate_lat: latLng.lat,
      coordinate_lng: latLng.lng,
    };
    if (product) {
      const oldLocation =
        product.Location &&
        product.Location.find((loc) => loc.address === newLocation.address);
      oldLocation
        ? window.alert("this location is already on the map")
        : dispatch(addLocation(newLocation, product.id));
    } else {
      dispatch(addLocation(newLocation, dataNotFound.product.id));
    }
  };

  return (
    <div>
      <form className="add-form" onSubmit={(e) => onSubmit(e)}>
        <SearchPlacesInput
          address={address}
          handleChange={handleChange}
          handleSelect={handleSelect}
        />
        <button type="submit">Add location</button>
      </form>
    </div>
  );
}
