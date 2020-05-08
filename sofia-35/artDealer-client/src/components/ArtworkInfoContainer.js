import React, { Component } from "react";
import { connect } from "react-redux";
import ArtworkInfo from "./ArtworkInfo";
import { loadArtwork, addToCart, updateArtwork } from "../store/actions";
import ArtworkForm from "./artistCabinet/ArtworkForm";

class ArtworkInfoContainer extends Component {
  state = {
    editMode: false,
    formValues: {},
  };

  componentDidMount() {
    const artworkId = this.props.match.params.artworkId;
    this.props.loadArtwork(artworkId);
  }
  handleClick = (artwork) => {
    if (!artwork.is_sold) {
      return this.props.addToCart(artwork);
    }
    return alert("Sorry, this artwork is already sold");
  };
  displayIsInCart = () => {
    const inCart = this.props.cart.find(
      (item) => item.id === this.props.artwork.id
    );
    if (inCart) {
      const itemInCart = "This artwork is in your cart";
      return itemInCart;
    } else {
      return null;
    }
  };
  handleDelete = (artwork) => {
    this.props.deleteArtwork(artwork);
  };
  // update artwork info
  onUpdate = (event) => {
    event.preventDefault();
    this.setState({
      editMode: true,
      formValues: {
        name: this.props.artwork.name,
        price: this.props.artwork.price,
        description: this.props.artwork.description,
        ship_country: this.props.artwork.ship_country,
        artFormId: this.props.artwork.artFormId,
      },
    });
  };
  onChange = (event) => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value,
      },
    });
  };
  onSubmit = async (event) => {
    await event.preventDefault();
    if (this.props.jwt) {
      await this.props.updateArtwork(this.props.artwork.id, this.props.jwt, {
        name: this.state.formValues.name,
        description: this.state.formValues.description,
        artFormId: this.state.formValues.artFormId,
        price: this.state.formValues.price,
        ship_country: this.state.formValues.ship_country,
      });
      await this.setState({
        editMode: false,
        formValues: {},
      });
      this.props.loadArtwork(this.props.artwork.id);
    }
  };

  render() {
    if (!Object.keys(this.props.artwork).length) {
      return <div>Loading...</div>;
    }
    // if pressed update info button:
    if (this.state.editMode === true) {
      return (
        <div className="container-fluid text-center">
          <div className="card border-0 shadow my-5 mx-5">
            <section className="row text-center my-5 mx-5">
              <div className="col-md-9 col-lg-8 mx-auto">
                <ArtworkForm
                  values={this.state.formValues}
                  buttonName="Update artwork"
                  onChange={this.onChange}
                  onSubmit={this.onSubmit}
                />
              </div>
            </section>
          </div>
        </div>
      );
    }
    // regular render:
    return (
      <div className="container-fluid text-center">
        <div className="card border-0 shadow my-5 mx-5">
          <ArtworkInfo
            artwork={this.props.artwork}
            toCart={this.handleClick}
            isInCart={this.displayIsInCart}
            artist={this.props.artist}
            update={this.onUpdate}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  artwork: state.artwork,
  cart: state.cart,
  artist: state.artist,
  jwt: state.jwt,
});
const mapDispatchToProps = { loadArtwork, addToCart, updateArtwork };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtworkInfoContainer);
