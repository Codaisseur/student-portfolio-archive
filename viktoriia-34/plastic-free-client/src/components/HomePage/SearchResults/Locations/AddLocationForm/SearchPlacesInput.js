import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";

export default function SearchPlacesInput({
  address,
  handleChange,
  handleSelect,
}) {
  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
      shouldFetchSuggestions={address.length > 3}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            className="search-place"
            {...getInputProps({
              placeholder: "Search location ...",
            })}
          />
          <div>
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion) => {
              const style = {
                backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
              };
              return (
                <div {...getSuggestionItemProps(suggestion, { style })}>
                  <span>{suggestion.description}</span>
                  <p>{suggestion.formattedSuggestion.mainText}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}
