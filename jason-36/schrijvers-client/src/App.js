import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import StoryList from "./pages/StoryList";
import LandingPage from "./pages/LandingPage";
import ReadStory from "./pages/ReadStory";
import ProfilePage from "./pages/ProfilePage";
import StoryInfo from "./pages/StoryInfo";
import MeetUpPage from "./pages/MeetUpPage";


function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/stories" component={StoryList} />
        <Route path="/stories/:id" component={ReadStory} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/story/info/:id" component={StoryInfo} />
        <Route path="/meetup" component={MeetUpPage} />
      </Switch>
    </div>
  );
}

export default App;
