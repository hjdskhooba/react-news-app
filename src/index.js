import { ConnectedRouter } from "connected-react-router";
import { store, history } from "./node_modules/store.js";
import Routes from "./node_modules/Routes.js";
import "./node_modules/scss/styles.scss";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./node_modules/i18n.js";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);
