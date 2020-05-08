import React, { Component } from "react";
import { connect } from "react-redux";
import AdditivesList from "./AdditivesList";
import { showAllAdditives } from "../../actions/additivesActions";

class AdditivesContainer extends Component {
  componentDidMount() {
    this.props.showAllAdditives();
  }
  render() {
    return <AdditivesList additives={this.props.additives} />;
  }
}

const mapStateToProps = state => {
  return {
    additives: state.additives
  };
};

export default connect(mapStateToProps, { showAllAdditives })(
  AdditivesContainer
);