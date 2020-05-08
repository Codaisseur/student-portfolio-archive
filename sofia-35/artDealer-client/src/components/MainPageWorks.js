import React, { Component } from "react";
import { Link } from "react-router-dom";
import Artworks from "./Artworks";

class MainPageWorks extends Component {
  render() {
    if (this.props.artworks === {}) {
      return <di>"Loading"</di>;
    }
    return (
      <section className="row justify-content-md-center">
        <div className="col-sm-11">
          <h2 className="font-weight-bold text-center mt-4 mb-0">
            Latest Artworks
          </h2>
          <hr className="mt-2 mb-5"></hr>
          <div className="row text-center text-lg-left">
            <Artworks artworks={this.props.artworks} />
          </div>
          <Link to="/artworks">
            <button className="btn btn-secondary btn-lg mt-2 mb-5">
              All artworks
            </button>
          </Link>
        </div>
      </section>
    );
  }
}

export default MainPageWorks;
