import React, { Component } from "react";

class Cart extends Component {
  displayCart = () => {
    const cart = this.props.cart;
    const totalPrice = cart.reduce((acc, prod) => prod.price + acc, 0);
    const result = cart.map((artwork) => {
      return (
        <section className="row text-center" key={artwork.id}>
          <div className="col-sm-2 text-center">
            <img
              className="img-thumbnail img-fluid mb-5 mx-5"
              id="aw-thumbnail"
              src={artwork.img}
              alt={artwork.name}
            />
          </div>
          <div className="col-sm-10">
            <h3 className="font-weight-light text-center mt-4 mb-0 ">
              {artwork.title}
            </h3>
            <div className="font-weight-light text-center my-2 ">
              {artwork.artist.name} {artwork.artist.surname}
            </div>
            <div className="mt-5 mx-5 ">Price: € {artwork.price}</div>
            <button
              type="submit"
              className="btn btn-secondary btn-lg my-2"
              onClick={() => this.props.handleRemove(artwork.id)}
            >
              Remove
            </button>
          </div>
        </section>
      );
    });
    return (
      <div className="col-sm-6 text-center">
        <h3 className="font-weight-light text-center mt-4 mb-0">
          Artworks to checkout:
        </h3>
        <hr className="mt-2 mb-5"></hr>
        {result}
        <h3 className="font-weight-bold text-center my-5">
          Total: € {totalPrice}
        </h3>
        <button
          className="btn btn-secondary btn-lg mb-5"
          type="submit"
          onClick={() => this.props.handleClear()}
        >
          Clear cart
        </button>
      </div>
    );
  };
  render() {
    if (this.props.cart.length < 1) {
      return (
        <div className="col-sm-6 text-center">
          <h3 className="font-weight-light text-center mb-5 ">
            Your cart is empty
          </h3>
        </div>
      );
    }
    return <this.displayCart />;
  }
}

export default Cart;
