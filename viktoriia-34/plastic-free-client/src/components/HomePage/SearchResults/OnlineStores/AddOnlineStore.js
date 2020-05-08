import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddOnlineStoreForm from "./AddOnlineStoreForm";

const selectToken = (reduxState) => {
  return reduxState.session.jwt;
};

export default function AddOnlineStore({ product, dataNotFound }) {
  const token = useSelector(selectToken);
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {dataNotFound ? (
        <p>
          no online stores with plastic-free {dataNotFound.product.name}. found
          one?
        </p>
      ) : (
        <p>found one more online store with plastic-free {product.name}?</p>
      )}
      {token ? (
        <div>
          <button onClick={(e) => setToggle(!toggle)}>add it</button>
          {toggle && (
            <AddOnlineStoreForm product={product} dataNotFound={dataNotFound} />
          )}
        </div>
      ) : (
        <div>
          <Link to="/login">Log in</Link> to add it
        </div>
      )}
    </div>
  );
}
