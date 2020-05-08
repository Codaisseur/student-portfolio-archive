import React from "react";
import { Link } from "react-router-dom";

export default function OnlineStoresList({ product }) {
  const onlineStores = product.OnlineStore;

  return (
    <ul>
      {onlineStores.map((store, i) => (
        <li key={i}>
          <a href={`${store.link}`}>{store.link}</a>
          {/* <Link to={store.link}> {store.link}</Link> */}
        </li>
      ))}
    </ul>
  );
}
