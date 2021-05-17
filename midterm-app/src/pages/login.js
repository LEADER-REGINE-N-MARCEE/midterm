import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { Link } from 'react-router-dom'
import './Login.css'
import badge from "./badge.png"

export default function Login() {


  return (
    <div>
      
      <div className={"section1"}>
        <div id="container">
          
          <img src={badge} />
          <h1>Login</h1>
            
            <form id="form-container">
              <div class="inputs">
                <TextField
                  type="text"
                  value={payload.email}
                  onChange={handleChange("email")}
                  id="standard-basic"
                  label="Email"
                  className="user"
                  style={{ width: '100%' }}
                ></TextField>
                <TextField
                  type="password"
                  value={payload.password}
                  onChange={handleChange("password")}
                  id="standard-basic"
                  label="Password"
                  className="pass"
                  inputProps={{
                    maxLength: 10,

                  }}
                  style={{ width: '100%' }}
                ></TextField>

              </div>

              <Button id= "loginBtn" className="loginBtn">Login</Button>
            </form>

            
            <p>Don’t have an account?<Link to="/profile" > Sign Up.</Link></p>
          
        </div>
      </div>
    </div>
  );
}
