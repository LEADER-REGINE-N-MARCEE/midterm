import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import firebase from "../utils/firebase";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./register.css";
import badge from "./badge.png";

export default function Register() {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const userInput = (prop) => (e) => {
    setPayload({ ...payload, [prop]: e.target.value });
  };

  const history = useHistory();
  const register = (e) => {
    e.preventDefault();

    if (!payload.email || !payload.password || !payload.confirmpassword) {
        alert("Please complete all fields!");

    } 
    
    else if(payload.password !== payload.confirmpassword){
        alert("Password do not match!")
    }
    
    else   {
        //firebase
        firebase
            .auth()
            .createUserWithEmailAndPassword(payload.email, payload.password)
            .then((userCredential) => {
                // Signed in 
                // var user = userCredential.user;
                // ...
                alert("Registered & Signin");
            })
            .catch((error) => {
                // var errorCode = error.code;
                var errorMessage = error.message;

                // ..
                alert(errorMessage);
            });
    }


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
              <TextField
                type="password"
                onChange={userInput("confirmpassword")}
                value={payload.confirmpassword}
                id="standard-basic"
                label="Password"
                className="pass"
                inputProps={{
                  maxLength: 10,
                }}
                style={{ width: "100%" }}
              ></TextField>
            </div>

            <Button id="loginBtn" className="loginBtn" onClick={register}>
              Register
            </Button>
          </form>

          <p>
            Have an account?<Link to="/login"> Login.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
