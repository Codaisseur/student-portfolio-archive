import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import store from "./store/store";
import "./App.css";
import MainPageContainer from "./components/MainPageContainer";
import NavbarContainer from "./components/NavbarContainer";
import AuthFormContainer from "./components/authorization/AuthFormContainer";
import ArtworksContainer from "./components/ArtworksContainer";
import UserCabinetContainer from "./components/artistCabinet/UserCabinetContainer";
import AddArtworkContainer from "./components/artistCabinet/AddArtworkContainer";
import ArtistsContainer from "./components/ArtistsContainer";
import ArtistInfoContainer from "./components/ArtistInfoContainer";
import ArtworkInfoContainer from "./components/ArtworkInfoContainer";
import CartContainer from "./components/CartContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <NavbarContainer />
          <Route exact path="/" component={MainPageContainer} />
          <Route exact path="/login" component={AuthFormContainer} />
          <Route exact path="/artworks" component={ArtworksContainer} />
          <Route exact path="/artists" component={ArtistsContainer} />
          <Route exact path="/cart" component={CartContainer} />
          <Route exact path="/myPage" component={UserCabinetContainer} />
          <Route
            exact
            path="/myPage/newArtwork"
            component={AddArtworkContainer}
          />
          <Route
            exact
            path="/artists/:artistId"
            component={ArtistInfoContainer}
          />
          <Route
            exact
            path="/artworks/:artworkId"
            component={ArtworkInfoContainer}
          />
        </div>
      </Provider>
    );
  }
}

export default App;
