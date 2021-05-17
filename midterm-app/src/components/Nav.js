import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "./logo.png";
import user from "./user.svg";
export default function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/home">Shop</Link>
          </li>
          <li>
            <Link to="/home">About Us</Link>
          </li>
        </ul>

        <img src={logo} id="logo-nav" />

        <Link to="#" id="profile-nav"> 
          <embed src={user} alt="account" />
        </Link>
      </nav>
    </div>
  );
}
