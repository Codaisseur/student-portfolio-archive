import React, { Component } from "react";
import { connect } from "react-redux";
import { signup } from "../../store/actions/authorization";
import SignupForm from "./AuthForm";

class SignupFormContainer extends Component {
  state = { login: "", password: "", email: "" };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.signup(this.state);
    this.setState({ login: "", password: "", email: "" });
  };
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-9 col-lg-8 mx-auto">
            <h3 className="font-weight-light text-center mt-4 mb-0">
              If you don`t have an account, pleas signup:
            </h3>
            <hr className="mt-2 mb-5"></hr>
            <SignupForm
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              values={this.state}
              buttonName="Signup"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { signup })(SignupFormContainer);
