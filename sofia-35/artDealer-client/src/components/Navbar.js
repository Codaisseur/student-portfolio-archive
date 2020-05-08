import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  loginCheck = () => {
    if (!this.props.user) {
      const login = (
        <Link to="/login">
          <div className="nav-link">
            <span
              className="glyphicon glyphicon-log-in "
              aria-hidden="true"
            ></span>
            Login
          </div>
        </Link>
      );
      return login;
    } else {
      const login = (
        <Link to={"/myPage"}>
          <div className="nav-link">My page</div>
        </Link>
      );
      return login;
    }
  };
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg ">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              <div>Home</div>
            </Link>
          </div>
          <div
            className="collapse navbar-collapse flex-grow-1 text-right"
            id="myNavbar"
          >
            <ul className="navbar-nav ml-auto flex-nowrap">
              <li className="nav-item">
                <Link to="/artists">
                  <div className="nav-link"> Artists</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/artworks">
                  <div className="nav-link">Artworks</div>
                </Link>
              </li>
              <li className="nav-item">{this.loginCheck()}</li>
              <li className="nav-item">
                <Link to="/cart">
                  <div className="nav-link">Cart</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
