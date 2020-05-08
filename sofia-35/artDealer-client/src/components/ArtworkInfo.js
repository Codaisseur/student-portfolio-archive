import React, { Component } from "react";
import { Link } from "react-router-dom";

class ArtworkInfo extends Component {
  displayArtwork = (props) => {
    if (this.props.artwork.id) {
      const artwork = this.props.artwork;
      const artworkInfo = (
        <main className="row text-center">
          <section className="col-sm-4 text-center">
            <img
              src={artwork.img}
              alt={artwork.name}
              className="img-fluid my-5 mx-5"
            />
          </section>
          <section className="col-sm-6 offset-sm-1">
            <h2 className="font-weight-light text-center mt-4 mb-0 ">
              {artwork.name}
            </h2>
            {artwork.artist.first_name || artwork.artist.last_name ? (
              <Link to={`/artists/${artwork.artist.id}`}>
                <h4 className="font-weight-light text-center my-2 ">
                  {artwork.artist.first_name} {artwork.artist.last_name}
                </h4>
              </Link>
            ) : (
              <Link to={`/artists/${artwork.artist.id}`}>
                <h4 className="font-weight-light text-center my-2 ">
                  {artwork.artist.login}
                </h4>
              </Link>
            )}
            <div className="mb-2 mx-5">€ {artwork.price}</div>
            {/* check if artwork is in cart */}
            <div className="mb-2 mx-5">{this.props.isInCart()}</div>
            {/* check if artwork belongs to logged in artist */}
            {this.props.artist.id &&
            this.props.artist.id === artwork.artist.id ? (
              <div>
                <button
                  className="btn btn-secondary btn-lg mb-5 mr-2"
                  onClick={this.props.update}
                >
                  Update info
                </button>
                <button
                  type="submit"
                  className="btn btn-secondary btn-lg mb-5 ml-2"
                >
                  Remove artwork
                </button>
              </div>
            ) : (
              <button
                type="submit"
                className="btn btn-secondary btn-lg mb-5"
                onClick={() => this.props.toCart(artwork)}
              >
                Add to cart
              </button>
            )}
            {props.children}
            <div className="mb-5 mx-5">{artwork.description}</div>
          </section>
        </main>
      );
      return artworkInfo;
    }
    return null;
  };
  render() {
    const artwork = this.props.artwork;
    return (
      <this.displayArtwork>
        {artwork.materials.length ? (
          <div className="mb-5 mx-5">Materials: {artwork.materials}</div>
        ) : null}
        {artwork.width_cm || artwork.height_cm ? (
          <div className="mb-5 mx-5">
            Format: {artwork.width_cm} x {artwork.height_cm}
          </div>
        ) : null}
      </this.displayArtwork>
    );
  }
}

export default ArtworkInfo;
