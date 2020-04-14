import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import { BrowserRouter } from "react-router-dom";

import "./style.css";
import { Provider } from "react-redux";
import { store } from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
