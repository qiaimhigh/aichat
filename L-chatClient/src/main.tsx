import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import './index.css'
import { BrowserRouter as Router } from "react-router-dom";
import "./static/css/base.scss";
import "./static/css/base.css";
import { Provider } from "react-redux";
import store from './store'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
