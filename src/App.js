import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./components/navbar";
import Signup from "./pages/signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/signup" component={Signup} />
        {/* <Redirect to="/" /> */}
      </Switch>
    </div>
  );
}

export default App;
