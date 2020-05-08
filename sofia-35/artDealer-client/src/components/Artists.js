import React, { Component } from "react";
import { Link } from "react-router-dom";

class Artists extends Component {
  displayArtists = () => {
    if (this.props.artists.artists) {
      const artists = this.props.artists.artists;
      const mapArtist = artists.map(artist => {
        return (
          <div key={artist.id} className="col-sm-3">
            <Link to={`/artists/${artist.id}`} className="d-block mb-4 h-100">
              <img
                src={require("../images/user.png")}
                alt={artist.first_name}
                className="img-fluid hvr-image"
              />
              <div className="hvrbox-layer">
                <div className="hvrbox-text">
                  {artist.first_name}
                  <br />
                  {artist.last_name}
                </div>
              </div>
            </Link>
          </div>
        );
      });
      return mapArtist;
    }
    return null;
  };
  render() {
    if (!Object.keys(this.props.artists).length) {
      return <div>Loading...</div>;
    }
    return <this.displayArtists />;
  }
}

export default Artists;
