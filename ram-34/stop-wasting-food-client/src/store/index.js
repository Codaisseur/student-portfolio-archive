import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "../reducers";
import ReduxThunk from "redux-thunk";

const persistConfig = {
  key: "root",
  //blacklist: [],
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => x;

const enhancer = compose(applyMiddleware(ReduxThunk), devTools);

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
