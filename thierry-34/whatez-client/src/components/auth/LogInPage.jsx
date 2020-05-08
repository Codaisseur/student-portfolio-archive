import React, { Component } from "react";
import { connect } from "react-redux";
import { userLogin } from "../../actions/usersActions";
import { withRouter } from "react-router";

export class LogInPage extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    console.log("this.state", this.state);
    console.log("what is props dispatch in handleSubmit:", this.props.dispatch);
    await this.props.dispatch(userLogin(email, password, this.props.history));
    console.log("handleSubmit-Login: ", this.props.user);
  };

  handleChange = event => {
    // const { value } = event.target;
    console.log("state is:", this.state);
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Log In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} value={this.state.email}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} value={this.state.password}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Log In</button>
            <div className="red-text center">
    {/* {authError ? <p>{authError}</p> : null} */}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(connect()(LogInPage));
