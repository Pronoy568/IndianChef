import React from "react";
import logo from "../../../assets/logo.png";
import ActiveNav from "./ActiveNav";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-300 md:flex items-center justify-around py-4 block">
        <img className="rounded-lg" src={logo} alt={logo} />
        <ul className="menu menu-horizontal bg-base-300">
          <li className="mx-3">
            <ActiveNav to="/">Home</ActiveNav>
          </li>
          <li className="mx-3">
            <ActiveNav to="/chef">Chef</ActiveNav>
          </li>
          <li className="mx-3">
            <ActiveNav to="/blog">Blog</ActiveNav>
          </li>
          <li className="mx-3">
            <ActiveNav to="/login">Login</ActiveNav>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
