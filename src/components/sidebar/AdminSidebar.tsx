import React from "react";
import { AdminSidebarItems } from "./SidebarItems";
import { NavLink, Outlet } from "react-router-dom";
import { SpaceDashboard } from "@mui/icons-material";
import "./AdminSidebar.scss";

const AdminSidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <h2>Shopper</h2>
        {AdminSidebarItems.map((item, index) => (
          <div className="sidebar-item" key={index}>
            <NavLink to={item.path} key={index} className="link">
              {/* <svg data-testid={item.icon} color="red"></svg> */}
              <div className="link-text">{item.name}</div>
            </NavLink>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default AdminSidebar;
