import React from "react";
import { render } from "react-dom";
import { FoodRecallEnforcement } from "./pages";
import store from "./store";
import { Provider } from "react-redux";
import "./styles/index.css";

render(
  <Provider store={store}>
    <FoodRecallEnforcement />
  </Provider>,
  document.getElementById("root")
);
