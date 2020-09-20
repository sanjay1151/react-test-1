import React from "react";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignUp from "./components/SignUp";
import Quotes from "./components/Quotes";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Redirect from="/" exact to="/login" />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/quotes" component={Quotes} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
