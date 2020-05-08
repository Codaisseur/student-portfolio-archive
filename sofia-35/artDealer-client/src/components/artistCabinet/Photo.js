import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image, Transformation } from "cloudinary-react";
import { url } from "../../cloudinary/CloudinaryService";
import { CloudinaryContext } from "cloudinary-react";

class Photo extends Component {
  render() {
    const options = { ...this.context, ...this.props };
    const urlPath = url(options.publicId, options);
    return (
      <div className="photo">
        {this.props.context && <h2>{this.props.context.custom.photo}</h2>}
        <a href={urlPath} target="_blank" rel="noopener noreferrer">
          <Image
            publicId={this.props.publicId}
            className="thumbnail inline"
            width="150"
            height="150"
            crop="fit"
            quality="80"
          >
            <Transformation quality="auto" fetchFormat="auto" />
          </Image>
        </a>
      </div>
    );
  }
  static contextType = CloudinaryContext.contextType;
}

Photo.propTypes = {
  context: PropTypes.object,
  publicId: PropTypes.string
};

export default Photo;
