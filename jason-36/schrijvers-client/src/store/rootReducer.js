import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import storyList from './storyList/reducer';
import readStory from './readStory/reducer';
import profilePage from './profilePage/reducer';
import storyInfo from './storyInfo/reducer';

export default combineReducers({
  appState,
  user,
  storyList,
  readStory,
  profilePage,
  storyInfo
});
