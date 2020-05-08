import React, { Component } from "react";
import { connect } from "react-redux";
import UserCabinet from "./UserCabinet";
import { loadArtist } from "../../store/actions";

class UserCabinetContainer extends Component {
  componentDidMount() {
    if (this.props.jwt) {
      this.props.loadArtist(this.props.jwt);
    }
  }
  render() {
    if (!this.props.jwt) {
      return (
        <h2 className="font-weight-light text-center mt-4 mb-0 font-weight-bold">
          You should be logged in to view this page.
        </h2>
      );
    }
    return <UserCabinet artist={this.props.artist} />;
  }
}

const mapStateToProps = state => ({
  jwt: state.jwt,
  artist: state.artist
});

export default connect(mapStateToProps, { loadArtist })(UserCabinetContainer);
