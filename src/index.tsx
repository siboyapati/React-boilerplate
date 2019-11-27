import React from "react";
import ReactDOM from "react-dom";
import Wrapper from "./components/Wrapper";

import "./style/normalize.scss";
import "./style/index.scss";

import { BrowserRouter as Router } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { RootReducer } from "./store/RootReducer";

const store = createStore(RootReducer);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Wrapper />
    </Provider>
  </Router>,
  document.getElementById("root")
);
