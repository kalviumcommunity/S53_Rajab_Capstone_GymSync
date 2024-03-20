import React, { useState } from "react";
import { Home2 } from "iconsax-react";
import { User } from "iconsax-react";
import { Notification } from "iconsax-react";
import { CalendarSearch } from "iconsax-react";
import { Category } from "iconsax-react";
import { Link } from "react-router-dom";
import "./Components.css";
const Sidebar = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="SidebarParent">
      <div className="parent-container">
        <Link
          style={{ textDecoration: "none" }}
          to="/"
        >
          <div className="SideBarIcons">
            {/* HOME ICON */}
            <Home2
              className="insideIcons"
              size="24"
              style={{ transition: "color 0.3s", color: "#ffffff" }}
            />
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/profile">
          <div className="SideBarIcons">
            {/* USER ICON */}
            <User
              className="insideIcons"
              size="24"
              style={{ transition: "color 0.3s", color: "#ffffff" }}
            />
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/notification">
          <div className="SideBarIcons">
            {/* NOTIFICATION ICON */}
            <Notification
              className="insideIcons"
              size="24"
              style={{ transition: "color 0.3s", color: "#ffffff" }}
            />
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/history">
          <div className="SideBarIcons">
            {/* HISTORY ICON */}
            <CalendarSearch
              className="insideIcons"
              size="24"
              style={{ transition: "color 0.3s", color: "#ffffff" }}
            />{" "}
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/home">
          <div className="SideBarIcons">
            {/* SETTINGS ICON */}
            <Category
              className="insideIcons"
              size="24"
              style={{ transition: "color 0.3s", color: "#ffffff" }}
            />{" "}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
