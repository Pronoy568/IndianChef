import React from "react";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-300 md:flex items-center justify-around py-4 block">
        <img className="rounded-lg" src={logo} alt={logo} />
        <ul className="menu menu-horizontal bg-base-300">
          <li className="mx-3">
            <a>Home</a>
          </li>
          <li className="mx-3">
            <a>Chef</a>
          </li>
          <li className="mx-3">
            <a>Blog</a>
          </li>
          <li className="mx-3">
            <a>Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
