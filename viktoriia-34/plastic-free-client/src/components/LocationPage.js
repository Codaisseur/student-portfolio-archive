import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchLocation } from "../store/location/actions";

const selectLocation = (reduxState) => {
  return reduxState.locations.single;
};

export default function LocationPage() {
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchLocation(id));
  }, []);

  const location = useSelector(selectLocation);
  const products = location && location.Product;

  return (
    <div>
      {location && (
        <div>
          <h1>{location.name}</h1>
          <h3>{location.address}</h3>
          <div>
            plastic-free products in this location:
            {products &&
              products.map((product, i) => <p key={i}>{product.name},</p>)}
          </div>
        </div>
      )}
    </div>
  );
}
