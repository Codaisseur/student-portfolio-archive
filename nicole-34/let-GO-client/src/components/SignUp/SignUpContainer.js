import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import { connect } from "react-redux";
import { signUp } from "../../actions/user";

class SignupFormContainer extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    streetName: "",
    houseNumber: "",
    city: "",
    telephoneNumber: "",
    latitude: "",
    longitude: ""
  };

  componentDidMount() {
    this.getLocation();
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log("hello state", this.state);
    this.props.dispatch(signUp(this.state, this.props.history));
    this.setState({
      username: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      streetName: "",
      houseNumber: "",
      city: "",
      telephoneNumber: "",
      latitude: "",
      longitude: ""
    });
  };

  getLocation = () => {
    // console.log("sign up click");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.getCoordinates,
        this.handleLocationError
      );
    } else {
      alert("Geolocation is not supported");
    }
  };

  getCoordinates = position => {
    // console.log("position", position);
    const { latitude, longitude } = position.coords;
    this.setState({ latitude, longitude });
  };

  handleLocationError = error => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert(
          "Unable to create account. User denied the request for Geolocation."
        );
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
      default:
        alert("An unknown error occurred.");
    }
  };

  render() {
    // console.log("=====", this.state);
    return (
      <div>
        {this.props.user.userCreated ? <h1>Account created</h1> : null}
        <h2 className="signup-title">Sign Up</h2>
        <br />
        <SignUpForm
          text={"Signup"}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          values={this.state}
          getLocation={this.getLocation}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("STATE IN MSTP", state);
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(SignupFormContainer);
