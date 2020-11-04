import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import Menu from "./Components/Menu";
import ListBoard from "./Components/ListBoard";
import BoardDetails from "./Components/BoardDetails";
import { Router, Link, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

ReactDOM.render(
  <React.StrictMode>
    <Router history={createBrowserHistory()}>
      <Menu/>
      <Switch>
        <Route exact path="/" component={ListBoard} />
        <Route exact path="/boarddetail/:id" component={BoardDetails} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
