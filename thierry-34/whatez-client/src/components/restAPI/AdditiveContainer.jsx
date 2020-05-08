import React, { Component } from "react";
import { connect } from "react-redux";
import AdditiveDetails from "./AdditiveDetails";
import { showOneAdditive } from "../../actions/additivesActions";

class AdditiveContainer extends Component {
  componentDidMount() {
    this.props.showOneAdditive(this.props.match.params.code);
    console.log(`===>>  MATCH.PARAMS SAYS WHAT ?`,this.props.match.params.code)
  }
  render() {
    return <AdditiveDetails additive={this.props.additive} />;
  }
}

const mapStateToProps = state => {
  return {
    additive: state.additive
  };
};

export default connect(mapStateToProps, { showOneAdditive })(
  AdditiveContainer
);