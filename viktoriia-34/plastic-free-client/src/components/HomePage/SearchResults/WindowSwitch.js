import React from "react";

export default function SearchResultsHeader({ product, window, setWindow }) {
  return (
    <div className="view-options">
      {window === "locations" && (
        <div>
          {product && product.Location && product.Location.length > 0 ? (
            <b onClick={() => setWindow("locations")} className="active">
              {product.Location.length} locations
            </b>
          ) : (
            <b onClick={() => setWindow("locations")} className="active">
              no locations
            </b>
          )}
          <b> | </b>
          {product && product.OnlineStore && product.OnlineStore.length > 0 ? (
            <b onClick={() => setWindow("online")}>
              {product.OnlineStore.length} online stores
            </b>
          ) : (
            <b onClick={() => setWindow("online")}>no online stores</b>
          )}
        </div>
      )}
      {window === "online" && (
        <div>
          {product && product.Location && product.Location.length > 0 ? (
            <b onClick={() => setWindow("locations")}>
              {product.Location.length} locations
            </b>
          ) : (
            <b onClick={() => setWindow("locations")}>no locations</b>
          )}
          <b> | </b>
          {product && product.OnlineStore && product.OnlineStore.length > 0 ? (
            <b onClick={() => setWindow("online")} className="active">
              {product.OnlineStore.length} online stores
            </b>
          ) : (
            <b onClick={() => setWindow("online")} className="active">
              no online stores
            </b>
          )}
        </div>
      )}
    </div>
  );
}
