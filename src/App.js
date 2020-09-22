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
import Address from "./components/Address";
import Profile from "./components/Profile";
import AddAddress from "./components/AddAddress";
import ViewAddress from "./components/ViewAddress";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Redirect from="/" exact to="/login" />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/quotes" component={Quotes} />
          <Route path="/address" component={Address} />
          <Route path="/profile" component={Profile} />
          <Route path="/addAddress" component={AddAddress} />
          <Route path="/viewAddress" component={ViewAddress} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
