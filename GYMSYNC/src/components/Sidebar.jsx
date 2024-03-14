import React from "react";
import { Home2 } from "iconsax-react";
import { User } from "iconsax-react";
import { Notification } from "iconsax-react";
import { CalendarSearch } from "iconsax-react";
import { Category } from "iconsax-react";

const Sidebar = () => {
  return (
    <div className="SidebarParent">
      <div>
        <img
          className="logo"
          src="https://i.imgur.com/z6spKK9_d.webp?maxwidth=760&fidelity=grand"
        ></img>
      </div>
      <div className="parent-container">
        <div className="SideBarIcons">
          {/* HOME ICON */}
          <Home2
            className="insideIcons"
            size="24"
            style={{ transition: "color 0.3s", color: "#ffffff" }}
            onMouseEnter={(e) => (e.target.style.color = "#000000")}
            onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
          />
        </div>
        <div className="SideBarIcons">
          {/* USER ICON */}
          <User
            className="insideIcons"
            size="24"
            style={{ transition: "color 0.3s", color: "#ffffff" }}
            onMouseEnter={(e) => (e.target.style.color = "#000000")}
            onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
          />
        </div>
        <div className="SideBarIcons">
          {/* NOTIFICATION ICON */}
          <Notification
            className="insideIcons"
            size="24"
            style={{ transition: "color 0.3s", color: "#ffffff" }}
            onMouseEnter={(e) => (e.target.style.color = "#000000")}
            onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
          />
        </div>
        <div className="SideBarIcons">
          {/* HISTORY ICON */}
          <CalendarSearch
            className="insideIcons"
            size="24"
            style={{ transition: "color 0.3s", color: "#ffffff" }}
            onMouseEnter={(e) => (e.target.style.color = "#000000")}
            onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
          />{" "}
        </div>
        <div className="SideBarIcons">
          {/* SETTINGS ICON */}
          <Category
            className="insideIcons"
            size="24"
            style={{ transition: "color 0.3s", color: "#ffffff" }}
            onMouseEnter={(e) => (e.target.style.color = "#000000")}
            onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
