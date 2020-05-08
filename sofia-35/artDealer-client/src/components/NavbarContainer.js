import React, { Component } from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";

class NavbarContainer extends Component {
  render() {
    return <Navbar user={this.props.jwt} />;
  }
}

function mapStateToProps(state) {
  return {
    jwt: state.jwt
  };
}
export default connect(mapStateToProps)(NavbarContainer);
