import React from "react";
import logo from "../../../assets/logo.png";
import ActiveNav from "./ActiveNav";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-300 md:flex items-center justify-around py-4 block">
        <div className="flex items-center justify-center">
          <img className="rounded-lg" src={logo} alt={logo} />
        </div>
        <ul className="menu menu-horizontal bg-base-300 mt-5 md:mt-0">
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
