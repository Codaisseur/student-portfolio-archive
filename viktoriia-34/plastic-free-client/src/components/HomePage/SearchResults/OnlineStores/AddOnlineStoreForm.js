import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findCountries } from "../../../../store/country/actions";
import { addOnlineStore } from "../../../../store/online_store/actions";

const selectCountries = (reduxState) => {
  return reduxState.countries;
};

export default function AddOnlineStore({ product, dataNotFound }) {
  const dispatch = useDispatch();
  const [link, setLink] = useState("");
  const [country, setCountry] = useState("");
  const [countryId, setCountryId] = useState(null);
  const [countrySuggestions, showCountrySuggestions] = useState(false);

  const countries = useSelector(selectCountries);

  const onSubmit = (e) => {
    e.preventDefault();
    showCountrySuggestions(false);
    if (product) {
      countryId && dispatch(addOnlineStore(link, product.id, countryId));
    } else {
      countryId &&
        dispatch(addOnlineStore(link, dataNotFound.product.id, countryId));
    }
    setLink("");
    setCountry("");
    setCountryId("");
  };

  const onCountryChange = (key) => {
    setCountry(key);
    key.length > 0
      ? showCountrySuggestions(true)
      : showCountrySuggestions(false);
    key.length > 2 && dispatch(findCountries(key));
  };

  const chooseCountry = (c) => {
    showCountrySuggestions(false);
    setCountry(c.name);
    setCountryId(c.id);
  };

  return (
    <div>
      <form className="add-form" onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          name="link"
          placeholder="link"
          onChange={(e) => setLink(e.target.value)}
          value={link}
        />
        <input
          type="text"
          name="country"
          placeholder="country"
          onChange={(e) => onCountryChange(e.target.value)}
          value={country}
        />
        <button type="submit">Add store</button>
      </form>
      {countries && countrySuggestions && (
        <ul>
          {countries.map((c, i) => (
            <li
              className="suggestion"
              key={i}
              onClick={(e) => chooseCountry(c)}
            >
              {c.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
