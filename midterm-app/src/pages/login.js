import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import firebase from "../utils/firebase";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./login.css";
import badge from "./badge.png";

export default function Login() {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const userInput = (prop) => (e) => {
    setPayload({ ...payload, [prop]: e.target.value });
  };

  const history = useHistory();
  const signin = (e) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then((userCredential) => {
        // Signed in
        // ...
        console.log("hello");
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <div className={"section1"}>
        <div id="container">
          <img src={badge} />
          <h1>Login</h1>

          <form id="form-container">
            <div className="inputs">
              <TextField
                type="text"
                onChange={userInput("email")}
                value={payload.email}
                id="standard-basic"
                label="Email"
                className="user"
                style={{ width: "100%" }}
              ></TextField>
              <TextField
                type="password"
                onChange={userInput("password")}
                value={payload.password}
                id="standard-basic"
                label="Password"
                className="pass"
                inputProps={{
                  maxLength: 10,
                }}
                style={{ width: "100%" }}
              ></TextField>
            </div>

            <Button id="loginBtn" className="loginBtn" onClick={signin}>
              Login
            </Button>
          </form>

          <p>
            Don’t have an account?<Link to="/profile"> Sign Up.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
