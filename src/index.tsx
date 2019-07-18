import React from "react";
import { render } from "react-dom";
import { App } from "./app";
import store from "./store";
import { Provider } from "react-redux";
import "./styles/index.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
