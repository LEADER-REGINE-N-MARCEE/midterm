import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route component={Register} path="/register" />
        <Route component={Home} path="/home" exact />
        {/*   
        <Route component={Store} path="/store" />
       <Route component={Profile} path="/profile" />
        <Route component={Cart} path="/cart" exact />
        <Route component={NotFound} /> */}
        <Route component={Login} path="/login" />
      </Switch>
    </Router>
  );
}

export default App;
