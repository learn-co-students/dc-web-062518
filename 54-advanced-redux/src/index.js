import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import { Provider } from "react-redux";

import App from "./components/App";
import configureStore from "./redux/configureStore";

const store = configureStore();

// store.subscribe(() => console.log(store));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
