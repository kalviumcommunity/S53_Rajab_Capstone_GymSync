import React from "react";
import "./Components.css";
import { Link } from "react-router-dom";
import Cookies from "js-cookie"; 

const Navbar = () => {
  const handleLogout = () => {
    Cookies.remove("jwt"); 
    localStorage.removeItem("user-gymSync");

    console.log("After removal:", Cookies.get("jwt"));
    window.location.href = "/auth";
  };

  return (
    <div className="topBarParent">
      <div className="topBar">
        <div className="logobar">
          <img
            className="logo"
            src="https://i.imgur.com/z6spKK9_d.webp?maxwidth=760&fidelity=grand"
            alt="Logo"
          />
        </div>
        <div
          onClick={handleLogout}
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          <img
            className="userProfile"
            src="https://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/inside-logout-icon.png"
            style={{ width: "40px" }}
            alt="Logout"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
