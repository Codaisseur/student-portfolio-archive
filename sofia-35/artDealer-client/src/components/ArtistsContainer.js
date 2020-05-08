import React, { Component } from "react";
import Artists from "./Artists";
import { connect } from "react-redux";
import { loadArtists } from "../store/actions";
// import ArtFilterContainer from "./ArtFilterContainer";

class ArtistsContainer extends Component {
  componentDidMount() {
    const limit = 4;
    this.props.loadArtists(limit);
  }
  render() {
    return (
      <div className="container-fluid text-center">
        <div className="card border-0 shadow my-5 mx-5">
          <main className="row justify-content-md-center">
            <section className="col-sm-2">
              {/* <ArtFilterContainer /> */}
            </section>
            <section className="col-sm-8 offset-sm-1">
              <h2 className="font-weight-light text-center mt-4 mb-0 ">
                All Artists
              </h2>
              <hr className="mt-2 mb-5"></hr>
              <div className="row text-center text-lg-left">
                <Artists artists={this.props.artists} />
              </div>
            </section>
          </main>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  artists: state.artists
});
export default connect(mapStateToProps, { loadArtists })(ArtistsContainer);
