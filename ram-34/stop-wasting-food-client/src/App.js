import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Header from "./components/Header";
import Product from "./components/Product";
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/products" component={Product} />
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
