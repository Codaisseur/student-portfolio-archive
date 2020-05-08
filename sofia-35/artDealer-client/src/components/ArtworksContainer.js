import React, { Component } from "react";
import Artworks from "./Artworks";
import { connect } from "react-redux";
import { loadArtworks } from "../store/actions";
import ArtFilterContainer from "./ArtFilterContainer";

class ArtworksContainer extends Component {
  componentDidMount() {
    const limit = 8;
    this.props.loadArtworks(limit);
  }
  render() {
    return (
      <div className="container-fluid text-center">
        <div className="card border-0 shadow my-5 mx-5">
          <main className="row justify-content-md-center">
            <section className="col-sm-2">
              <ArtFilterContainer />
            </section>
            <section className="col-sm-8 offset-sm-1">
              <h2 className="font-weight-bold text-center mt-4 mb-0 ">
                All Artworks
              </h2>
              <hr className="mt-2 mb-5"></hr>
              <div className="row text-center text-lg-left">
                <Artworks artworks={this.props.artworks} />
              </div>
            </section>
          </main>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  artworks: state.artworks,
});
export default connect(mapStateToProps, { loadArtworks })(ArtworksContainer);
