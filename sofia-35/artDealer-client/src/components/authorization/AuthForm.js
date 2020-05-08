import React, { Component } from "react";

class AuthForm extends Component {
  inputForm = props => {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="form-label-group">
          <input
            id="inputLogin"
            placeholder="username"
            type="text"
            value={this.props.values.login}
            onChange={this.props.onChange}
            name="login"
            required
            className="form-control"
          />
          <label htmlFor="inputLogin">Username</label>
        </div>
        <div className="form-label-group">
          <input
            id="inputPassword"
            placeholder="password"
            type="password"
            value={this.props.values.password}
            onChange={this.props.onChange}
            name="password"
            className="form-control"
            required
          />
          <label htmlFor="inputPassword">Password</label>
        </div>
        {props.children}
        <button
          type="submit"
          className="btn btn-lg btn-block btn-secondary btn-login text-uppercase font-weight-bold my-2 "
        >
          {this.props.buttonName}
        </button>
      </form>
    );
  };
  render() {
    if (this.props.values.hasOwnProperty("email")) {
      return (
        <this.inputForm>
          <div className="form-label-group">
            <input
              id="inputEmail"
              placeholder="email"
              type="email"
              value={this.props.values.email}
              onChange={this.props.onChange}
              name="email"
              className="form-control"
              required
            />
            <label htmlFor="inputEmail">Email address</label>
          </div>
        </this.inputForm>
      );
    }
    return (
      <div>
        <this.inputForm />
      </div>
    );
  }
}

export default AuthForm;
