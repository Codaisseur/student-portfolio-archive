import React, { Component } from "react";
import { connect } from "react-redux";
import ArtistInfo from "./ArtistInfo";
import { loadArtistPublic } from "../store/actions";
import Artworks from "./Artworks";

class ArtistInfoContainer extends Component {
  componentDidMount() {
    const artistId = this.props.match.params.artistId;
    this.props.loadArtistPublic(artistId);
  }
  render() {
    if (!Object.keys(this.props.artistPublic).length) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container-fluid text-center">
        <div className="card border-0 shadow my-5 mx-5">
          <ArtistInfo artist={this.props.artistPublic} />
          <section>
            <h2 className="font-weight-light text-center mt-4 mb-0 ">
              Artist works
            </h2>
            <hr class="mt-2 mb-5"></hr>
            <div className="row text-center text-lg-left my-5 mx-5">
              <Artworks artworks={this.props.artistPublic} />
            </div>
          </section>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  artistPublic: state.artistPublic
});
export default connect(mapStateToProps, { loadArtistPublic })(
  ArtistInfoContainer
);
