import React from "react";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer";
import SignupForm from "./components/SignupForm";
import PracticianProfile from "./components/PracticianProfile";
import PracticiansList from "./components/PracticiansList";
import PracticianForm from "./components/PracticianForm";
import Homepage from "./components/Homepage";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/login" component={LoginForm} />
      <Route path="/signup" component={SignupForm} />
      <Route path="/practicians/:id" component={PracticianProfile} />
      <Route path="/practician-form" component={PracticianForm} />
      <Route exact path="/practicians" component={PracticiansList} />
      {/* <Footer /> */}
    </main>
  );
}

export default App;
