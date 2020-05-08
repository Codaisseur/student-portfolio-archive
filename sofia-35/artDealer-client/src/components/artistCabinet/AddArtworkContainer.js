import React, { Component } from "react";
import { connect } from "react-redux";
import AddArtwork from "./AddArtwork";
import { addArtwork } from "../../store/actions";

class AddArtworkContainer extends Component {
  state = {
    name: "",
    description: "",
    price: 0,
    ship_country: "",
    artFormId: 1
  };
  render() {
    return (
      <div className="container-fluid text-center">
        <div className="card border-0 shadow my-5 mx-5">
          <AddArtwork
            values={this.state}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            jwt={this.props.jwt}
            errors={this.props.errors}
          />
          <h4>{this.errorMsg}</h4>
        </div>
      </div>
    );
  }
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = async event => {
    await event.preventDefault();
    if (this.props.jwt && this.props.photos[0]) {
      const artist = this.props.artist.id;
      const img = this.props.photos[0].url;
      await this.props.addArtwork(
        {
          name: this.state.name,
          description: this.state.description,
          artistId: artist,
          artFormId: this.state.artFormId,
          price: this.state.price,
          ship_country: this.state.ship_country,
          img: img
        },
        this.props.jwt,
        this.props.history
      );
      this.setState({
        name: "",
        description: "",
        price: 0,
        ship_country: "",
        artFormId: 1
      });
    }
    const errorMsg = "You need to upload your artwork's photo";
    return console.log(errorMsg);
  };
}
const mapStateToProps = state => ({
  jwt: state.jwt,
  photos: state.photos,
  artist: state.artist,
  errors: state.errors
});
export default connect(mapStateToProps, { addArtwork })(AddArtworkContainer);
