import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import Menu from "./Components/Menu";
import Task from "./page/listTask/Task";
import Register from "./page/register/Register";
import EditPassword from "./page/editpassword/EditPassword";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Login from "./page/login/Login";
import ListBoard from "./page/listBoard/ListBoard";

ReactDOM.render(
  <React.StrictMode>
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/" component={ListBoard} />
        <Route exact path="/boards" component={ListBoard}/>
        <Route exact path="/task/:board" component={Task} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/editpassword" component={EditPassword} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
