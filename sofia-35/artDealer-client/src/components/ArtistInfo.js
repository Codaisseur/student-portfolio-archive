import React, { Component } from "react";

class ArtistInfo extends Component {
  displayArtist = () => {
    if (this.props.artist.id) {
      const artist = this.props.artist;
      let name = null;
      if (artist.first_name || artist.last_name) {
        name = (
          <div>
            {artist.first_name} {artist.last_name}
          </div>
        );
      } else {
        name = <div>{artist.login}</div>;
      }
      const artistInfo = (
        <main className="row text-center">
          <section className="col-sm-2 text-center">
            <img
              src={require("../images/user.png")}
              alt={artist.first_name}
              className="img-fluid hvr-image my-5 mx-5"
            />
            <div className="mb-5 mx-5">{name}</div>
          </section>
          <section className="col-sm-6 offset-sm-1">
            <h2 className="font-weight-light text-center mt-4 mb-0 ">
              Artist bio
            </h2>
            <hr className="mt-2 mb-5"></hr>
            <div>{artist.bio}</div>
          </section>
        </main>
      );
      return artistInfo;
    }
    return null;
  };
  render() {
    return <this.displayArtist />;
  }
}

export default ArtistInfo;
