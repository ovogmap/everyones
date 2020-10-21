import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./common/store";

const listener = () => {
  const state = store.getState();
  console.log(state);
};
const unsubscribe = store.subscribe(listener);
console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
