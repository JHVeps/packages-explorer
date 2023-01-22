import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./components/app/App";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

const WithProvider = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(<WithProvider />, document.getElementById("root"));
