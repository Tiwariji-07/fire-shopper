import React from "react";
import { UserSidebarItems } from "./SidebarItems";
import { NavLink, Outlet } from "react-router-dom";

const UserSidebar = () => {
  return (
    <>
      <div>
        <h2>UserSidebar</h2>
        {UserSidebarItems.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <Outlet />
    </>
  );
};

export default UserSidebar;
