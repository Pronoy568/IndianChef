import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import ActiveNav from "./ActiveNav";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import person from "./../../../assets/person.png";

const Navbar = () => {
  const { userLogin, LogOut } = useContext(AuthContext);
  return (
    <div>
      <div className="navbar bg-base-300 md:flex items-center justify-around py-4 block">
        <div className="flex items-center justify-center">
          <img className="rounded-lg" src={logo} alt={logo} />
        </div>
        <ul className="menu menu-horizontal bg-base-300 mt-5 md:mt-0 md:text-xl">
          <li className="mx-3">
            <ActiveNav to="/">Home</ActiveNav>
          </li>
          <li className="mx-3">
            <ActiveNav to="/chef">Chef</ActiveNav>
          </li>
          <li className="mx-3">
            <ActiveNav to="/blog">Blog</ActiveNav>
          </li>
          {userLogin ? (
            <>
              <li className="mx-3">
                <button className="rounded-xl" onClick={LogOut}>
                  Logout
                </button>
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={
                    userLogin?.displayName
                      ? userLogin.displayName
                      : userLogin.email
                  }
                >
                  <img
                    style={{ borderRadius: "50%" }}
                    className="w-16"
                    src={
                      userLogin?.photoURL === null || undefined
                        ? person
                        : userLogin.photoURL
                    }
                    alt={userLogin.email}
                  />
                </div>
              </li>
            </>
          ) : (
            <>
              <li className="mx-3">
                <ActiveNav to="/login">Login</ActiveNav>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
