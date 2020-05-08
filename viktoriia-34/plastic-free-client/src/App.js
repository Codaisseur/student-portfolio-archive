import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./components/HomePage/HomePage";
import LocationPage from "./components/LocationPage";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import LogoutPage from "./components/LogoutPage";
import UserPage from "./components/UserPage";

import "./styles/style.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/location/:id" component={LocationPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route exact path="/user/:id" component={UserPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
