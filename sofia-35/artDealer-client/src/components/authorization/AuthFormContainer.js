import React, { Component } from "react";
import { connect } from "react-redux";
import LoginFormContainer from "./LoginFormContainer";
import SignupFormContainer from "./SignupFormContainer";

class AuthFormContainer extends Component {
  render() {
    const errors = this.props.errors.map(error => <p>{error}</p>);
    return (
      <div className="container-fluid text-center">
        <div className="card border-0 shadow my-5 mx-5">
          <LoginFormContainer history={this.props.history} />
          <div>{errors}</div>

          <SignupFormContainer />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors
  };
}
export default connect(mapStateToProps)(AuthFormContainer);
