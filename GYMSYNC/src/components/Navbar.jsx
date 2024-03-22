import React from "react";
import "./Components.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="topBarParent">
      <div className="topBar">
        <div className="logobar">
          <img
            className="logo"
            src="https://i.imgur.com/z6spKK9_d.webp?maxwidth=760&fidelity=grand"
          ></img>
        </div>
        <div>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <img
              className="userProfile"
              src="https://cdn-icons-png.freepik.com/512/219/219969.png"
              style={{ width: "40px" }}
            ></img>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
