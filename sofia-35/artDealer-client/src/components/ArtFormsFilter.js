import React, { Component } from "react";

class ArtFormsFilter extends Component {
  mapArtForms = () => {
    const artForms = this.props.artForms;
    if (Object.keys(artForms).length) {
      const updArtForms = artForms.map(genre => {
        return (
          <div key={genre.id} className="form-check">
            <input
              type="checkbox"
              id={genre.name}
              name={genre.name}
              className="form-check-input"
            />
            <label htmlFor={genre.name} className="form-check-label">
              {genre.name}
            </label>
          </div>
        );
      });
      return <form className="form-group text-left ml-5">{updArtForms}</form>;
    }
    return null;
  };
  render() {
    return (
      <div>
        <h3 className="font-weight-light text-left mt-4 ml-5 mb-0 ">
          Art type
        </h3>
        <hr className="mt-2 mb-5"></hr>
        <div>
          <this.mapArtForms />
        </div>
      </div>
    );
  }
}

export default ArtFormsFilter;
