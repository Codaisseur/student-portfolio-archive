import React, { Component } from "react";
import { connect } from "react-redux";
import { userSignUp } from "../../actions/usersActions";
// import { Card, Button, TextField } from "@material-ui/core";


export class SignUpPage extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { username, email, password } = this.state;
    console.log("this.state:", this.state);

    this.props.dispatch(userSignUp(username, email, password));
    this.clear();
    this.props.history.push("/login");
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value             // !!! NOT .name  ,  event.target.id  !!!!  see in the Materialize rendered !!!!!
    });
  };

  clear = () => {
    this.setState({
      username: "",
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="username">username</label>
            <input type="text" id='username' onChange={this.handleChange} value={this.state.username}/>
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} value={this.state.email}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} value={this.state.password}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
            <div className="red-text center">
    {/* {authError ? <p>{authError}</p> : null} */}
            </div>
          </div>
          {/* <button className="btn pink lighten-1 z-depth-0" onClick={() => this.props.history.push("/")}>Cancel</button> */}
        </form>
      </div>
    )
  }
}

export default connect()(SignUpPage);