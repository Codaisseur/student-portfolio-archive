import React, { useState } from "react";
import WindowSwitch from "./WindowSwitch";
import Locations from "./Locations/Locations";
import OnlineStores from "./OnlineStores/OnlineStores";

export default function SearchResults({ product, dataNotFound }) {
  const [window, setWindow] = useState("locations");

  return (
    <div>
      {(product || dataNotFound) && (
        <WindowSwitch window={window} setWindow={setWindow} product={product} />
      )}
      {window === "locations" && (
        <Locations product={product} dataNotFound={dataNotFound} />
      )}
      {window === "online" && (
        <OnlineStores product={product} dataNotFound={dataNotFound} />
      )}
    </div>
  );
}
