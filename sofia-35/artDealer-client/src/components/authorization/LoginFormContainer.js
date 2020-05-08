import React, { Component } from "react";
import LoginForm from "./AuthForm";
import { connect } from "react-redux";
import { login } from "../../store/actions/authorization";

class LoginFormContainer extends Component {
  state = { login: "", password: "" };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state, this.props.history);
    this.setState({ login: "", password: "" });
  };
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-9 col-lg-8 mx-auto">
            <h3 className="font-weight-light text-center mt-4 mb-0">LOGIN</h3>
            <hr className="mt-2 mb-5"></hr>
            <LoginForm
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              values={this.state}
              buttonName="Login"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { login })(LoginFormContainer);
