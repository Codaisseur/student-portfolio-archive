import React, { Component } from "react";
import { connect } from "react-redux";
import ArtFormsFilter from "./ArtFormsFilter";
import { loadArtForms } from "../store/actions";

class ArtFilterContainer extends Component {
  componentDidMount() {
    this.props.loadArtForms();
  }
  render() {
    return (
      <div>
        <ArtFormsFilter artForms={this.props.artForms} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  artForms: state.artForms
});
export default connect(mapStateToProps, { loadArtForms })(ArtFilterContainer);
