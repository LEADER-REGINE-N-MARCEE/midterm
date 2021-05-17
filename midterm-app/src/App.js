import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
{/*         <Route component={Profile} path="/profile" />
        <Route component={Store} path="/store" />
        <Route component={Register} path="/register" />
        <Route component={Cart} path="/cart" exact />
        <Route component={NotFound} /> */}
        <Route component={Login} path="/login" />
      </Switch>
    </Router>
  );
}

export default App;
