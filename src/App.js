import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./components/navbar";
import Signup from "./pages/signup";
import Profile from "./pages/profile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/profile" component={Profile} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
