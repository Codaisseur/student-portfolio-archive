import React, { Component } from "react";
import request from "superagent";
import PropTypes from "prop-types";
import { CloudinaryContext } from "cloudinary-react";
import { connect } from "react-redux";
import { openUploadWidget } from "../../cloudinary/CloudinaryService";
import { photosUploaded } from "../../store/actions/cloudinary";
import Photo from "./Photo";
import { deleteUploadedPhoto } from "../../store/actions/cloudinary";

class PhotoList extends Component {
  render() {
    return (
      <div>
        {this.props.photos.length === 0 && (
          <div className="actions">
            <button
              className="upload_link btn btn-lg btn-secondary btn-login text-uppercase font-weight-bold my-2"
              onClick={this.uploadImageWithCloudinary.bind(this)}
            >
              Upload photo of your artwork
            </button>
          </div>
        )}
        <div className="photos">
          {this.props.photos.length === 0 && (
            <p className="font-weight-light text-center mb-4">
              Please upload photo of your artwork!
            </p>
          )}
          {this.props.photos.map(photo => {
            return (
              <div>
                <Photo key={photo.public_id} publicId={photo.public_id} />
                <button
                  className="delete-image btn btn-lg btn-secondary btn-login text-uppercase font-weight-bold my-5"
                  onClick={this.deletePhoto.bind(this, photo)}
                >
                  Delete image
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  uploadImageWithCloudinary() {
    const uploadOptions = {
      tags: "artwork",
      folder: "artworks",
      return_delete_token: true,
      ...this.context
    };
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        this.props.onPhotosUploaded(photos);
      } else {
        console.log(error);
      }
    });
  }
  deletePhoto(photo) {
    request
      .post(
        `https://api.cloudinary.com/v1_1/${this.context.cloudName}/delete_by_token`
      )
      .set("Content-Type", "application/json")
      .set("X-Requested-With", "XMLHttpRequest")
      .send({
        token: photo.delete_token
      })
      .then(this.onDeletePhoto.bind(this, photo));
  }
  onDeletePhoto(photo) {
    const foundPhoto = this.props.photos.find(
      item => item.public_id === photo.public_id
    );
    console.log("NUMBER2", foundPhoto);
    this.props.onDeleteUploadedPhoto(foundPhoto.public_id);
  }
  static contextType = CloudinaryContext.contextType;
}

PhotoList.propTypes = {
  photos: PropTypes.array,
  onPhotosUploaded: PropTypes.func,
  onDeleteUploadedPhoto: PropTypes.func
};

export default connect(state => ({ photos: state.photos }), {
  onPhotosUploaded: photosUploaded,
  onDeleteUploadedPhoto: deleteUploadedPhoto
})(PhotoList);
