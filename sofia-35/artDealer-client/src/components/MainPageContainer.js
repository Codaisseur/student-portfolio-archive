import React, { Component } from "react";
import { connect } from "react-redux";
import MainPageWorks from "./MainPageWorks";
import MainPageArtists from "./MainPageArtists";
import { loadArtworks, loadArtists } from "../store/actions";

class MainPageContainer extends Component {
  componentDidMount() {
    const limit = 6;
    this.props.loadArtworks(limit);
    this.props.loadArtists(limit);
  }
  render() {
    return (
      <div className="container-fluid text-center">
        <main className="card border-0 shadow my-5 mx-5">
          <MainPageWorks artworks={this.props.artworks} />
          <MainPageArtists artists={this.props.artists} />
        </main>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  artworks: state.artworks,
  artists: state.artists,
});
export default connect(mapStateToProps, { loadArtworks, loadArtists })(
  MainPageContainer
);
