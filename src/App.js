import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/LoginPage";
import Home from "./pages/HomePage";

function App({ user }) {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
