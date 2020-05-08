import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import "./Home.css";

function Home() {
  const loggedInUserId = useSelector((state) => state.user.user.id);
  return (
    <div>
      <section className="jumbotron text-center home-section">
        <div className="container">
          <h1 className="custom-shadow">Stop Wasting Food</h1>
          <p className="lead text-muted custom-shadow">
            Today’s wastage is tomorrow’s shortage. Please don’t waste food.
            Live simply, so that others may simply live.
          </p>
          {loggedInUserId ? null : (
            <div>
              <a
                href="/login"
                className="btn btn-primary my-2 home-button login-button"
              >
                Login
              </a>
              <a href="/signup" className="btn btn-secondary my-2 home-button">
                Signup
              </a>
            </div>
          )}
        </div>
      </section>
      <Product />
    </div>
  );
}

export default Home;
