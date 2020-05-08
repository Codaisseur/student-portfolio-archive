import React, { Component } from "react";
import PhotoList from "./PhotoList";
import { CloudinaryContext } from "cloudinary-react";
import ArtworkForm from "./ArtworkForm";

class AddArtwork extends Component {
  postArtwork = () => {
    if (this.props.jwt) {
      return (
        <div>
          <h2 className="font-weight-light text-center mt-4 mb-0 ">
            Post a new artwork
          </h2>
          <hr class="mt-2 mb-5"></hr>
          <section className="row text-center my-5 mx-5">
            <div className="col-md-9 col-lg-8 mx-auto">
              <CloudinaryContext cloudName="d2eath4e" upload_preset="kwu9iom8">
                <PhotoList />
              </CloudinaryContext>
              <ArtworkForm
                values={this.props.values}
                onChange={this.props.onChange}
                onSubmit={this.onSubmit}
                buttonName="Add artwork"
              />
            </div>
          </section>
        </div>
      );
    }
    return (
      <h3 className="font-weight-light text-center mt-4 mb-0 font-weight-bold">
        Page not found
      </h3>
    );
  };

  render() {
    const errors = this.props.errors.map((error) => <p>{error}</p>);
    return (
      <div>
        <div>{errors}</div>
        <this.postArtwork />
      </div>
    );
  }
}

export default AddArtwork;
