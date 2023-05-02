import React from "react";
import { NavLink } from "react-router-dom";

const ActiveNav = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "bg-gray-600 rounded-xl text-white" : "rounded-xl"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveNav;
