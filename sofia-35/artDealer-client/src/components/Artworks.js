import React, { Component } from "react";
import { Link } from "react-router-dom";

class Artworks extends Component {
  displayArtworks = () => {
    if (this.props.artworks.artworks) {
      const artworks = this.props.artworks.artworks;
      const mapWork = artworks.map((artwork) => {
        return (
          <div
            key={artwork.id}
            className="col-lg-3 col-md-4 col-6 hvr-container"
          >
            <Link to={`/artworks/${artwork.id}`} className="d-block mb-4 h-100">
              <img
                className="img-thumbnail img-fluid hvr-image"
                id="aw-thumbnail"
                src={artwork.img}
                alt={artwork.name}
              />
              <div className="hvrbox-layer">
                <div className="hvrbox-text">{artwork.name}</div>
              </div>
            </Link>
          </div>
        );
      });
      return mapWork;
    }
    return null;
  };

  render() {
    if (!Object.keys(this.props.artworks).length) {
      return <div>Loading...</div>;
    }
    return <this.displayArtworks />;
  }
}

export default Artworks;
