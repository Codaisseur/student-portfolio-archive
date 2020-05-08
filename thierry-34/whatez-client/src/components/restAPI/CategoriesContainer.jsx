import React, { Component } from "react";
import { connect } from "react-redux";
import CategoriesList from "./CategoriesList";
import { showAllCategories } from "../../actions/categoriesActions";

class CategoriesContainer extends Component {
  componentDidMount() {
    this.props.showAllCategories();
  }
  render() {
    return <CategoriesList categories={this.props.categories} />;
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps, { showAllCategories })(
  CategoriesContainer
);