import React, { Component } from "react";
import { connect } from "react-redux";
import CategoryDetails from "./CategoryDetails";
import { showOneCategory } from "../../actions/categoriesActions";

class CategoryContainer extends Component {
  componentDidMount() {
    this.props.showOneCategory(this.props.match.params.id);
  }
  render() {
    return <CategoryDetails category={this.props.category} />;
  }
}

const mapStateToProps = state => {
  return {
    category: state.category
  };
};

export default connect(mapStateToProps, { showOneCategory })(
  CategoryContainer
);