import React, { Component } from "react";

class ArtworkForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="form-row">
          <div className="col form-group">
            <label htmlFor="artForms">Type of art:</label>
            <select
              className="form-control"
              id="artForms"
              name="artFormId"
              type="number"
              onChange={this.props.onChange}
            >
              <option value="1">Painting</option>
              <option value="2">Drawing</option>
              <option value="3">Sculpture</option>
            </select>
          </div>
          <div className="col form-group">
            <label htmlFor="price">Price in Euros*</label>
            <input
              className="form-control"
              id="price"
              type="number"
              min="0"
              step="0.5"
              name="price"
              value={this.props.values.price}
              onChange={this.props.onChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col form-group">
            <label htmlFor="artworkTitle">Title*</label>
            <input
              className="form-control"
              id="artworkTitle"
              placeholder="Artwork title"
              type="text"
              name="name"
              value={this.props.values.name}
              onChange={this.props.onChange}
              required
            />
          </div>
          <div className="col form-group">
            <label htmlFor="shipCountry">Country of shipping*</label>
            <input
              id="shipCountry"
              placeholder="France"
              type="text"
              name="ship_country"
              value={this.props.values.ship_country}
              onChange={this.props.onChange}
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Put any information about your work here"
              type="text"
              name="description"
              value={this.props.values.description}
              onChange={this.props.onChange}
              rows="3"
              className="form-control"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-lg btn-block btn-secondary btn-login text-uppercase font-weight-bold my-5"
        >
          {this.props.buttonName}
        </button>
      </form>
    );
  }
}

export default ArtworkForm;
