import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// Components
import Header from "./Layout/Header";
import Landing from "./Landing/Landing";
import Register from "./Users/Register";
import Remove from "./Users/Remove";

// State Management
import { Provider } from "react-redux";
import store from "../store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/register" component={Register} />
              <Route path="/remove" component={Remove} />
            </Switch>
          </div>
        </>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
