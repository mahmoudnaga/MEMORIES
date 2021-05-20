import React from "react";
import ReactDom from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import App from "./App";
import "./index.css";
import {  BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDom.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
