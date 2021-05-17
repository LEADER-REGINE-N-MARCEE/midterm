import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route component={Profile} path="/profile" />
        <Route component={Store} path="/store" />
        <Route component={Login} path="/login" />
        <Route component={Register} path="/register" />
        <Route component={Cart} path="/cart" exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
