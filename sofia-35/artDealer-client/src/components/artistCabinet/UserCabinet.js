import React, { Component } from "react";
import Artworks from "../Artworks";
import { Link } from "react-router-dom";
import ArtistInfo from "../ArtistInfo";

class UserCabinet extends Component {
  render() {
    if (!Object.keys(this.props.artist).length) {
      return <div>Loading...</div>;
    }
    return (
      <main className="container-fluid text-center">
        <div className="card border-0 shadow my-5 mx-5">
          <h2 className="font-weight-light text-center mt-4 mb-0 font-weight-bold">
            Art Cabinet of {this.props.artist.login}
          </h2>
          <hr className="mt-2 mb-5"></hr>
          <ArtistInfo artist={this.props.artist} />
          <section>
            <Link to={`/myPage/newArtwork`}>
              <button className="btn btn-secondary btn-lg mt-5 mr-2">
                Post new artwork
              </button>
            </Link>
            <button className="btn btn-secondary btn-lg mt-5 ml-2">
              Update personal info
            </button>
          </section>
          <section className="container-fluid text-center  my-5 mx-5">
            <h2 className="font-weight-light text-center mt-4 mb-0">
              My Artworks
            </h2>
            <hr className="mt-2 mb-5"></hr>
            <div className="row">
              <Artworks artworks={this.props.artist} />
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default UserCabinet;
