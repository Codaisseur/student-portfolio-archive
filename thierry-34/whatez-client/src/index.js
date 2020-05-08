import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from './serviceWorker';
import './index.css';

import { Provider } from "react-redux";

import {store, persistor} from "./store";
import {PersistGate} from 'redux-persist/integration/react';
import { BrowserRouter } from "react-router-dom";




ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();