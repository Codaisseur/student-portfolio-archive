import React from "react";
import { useDispatch } from "react-redux";

export default function PopularSearches({ findProductByCity }) {
  const dispatch = useDispatch();

  const find = (e) => {
    const productId = 5;
    const city = "Paris";
    dispatch(findProductByCity(productId, city));
  };
  const find1 = (e) => {
    const productId = 3;
    const city = "Amsterdam";
    dispatch(findProductByCity(productId, city));
  };
  const find2 = (e) => {
    const productId = 4;
    const city = "Rome";
    dispatch(findProductByCity(productId, city));
  };
  return (
    <div className="popular-searches">
      <h1>Popular searches</h1>
      <ul>
        <li onClick={(e) => find()}>Croissant in Paris</li>
        <li onClick={(e) => find1()}>Cheese in Amsterdam</li>
        <li onClick={(e) => find2()}>Pasta in Rome</li>
      </ul>
    </div>
  );
}
