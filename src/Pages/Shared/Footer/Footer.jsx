import React from "react";
import logo from "./../../../assets/logo2.png";

const Footer = () => {
  return (
    <section>
      <footer className="footer p-10 bg-base-200 text-center">
        <div>
          <img className="w-3/5 rounded" src={logo} alt="logo" />
          <p>
            Indian Best Chef Ltd.
            <br />
            Providing Recipe in website
          </p>
        </div>
        <div>
          <span className="footer-title text-xl">Services</span>
          <p>Recipe</p>
          <p>Chef</p>
          <p>Marketing</p>
          <p>Advertisement</p>
        </div>
        <div>
          <span className="footer-title text-xl">Company</span>
          <p>About us</p>
          <p>Contact</p>
          <p>Chef Info</p>
          <p>Recipe kit</p>
        </div>
        <div>
          <span className="footer-title text-xl">Legal</span>
          <p>Terms of use</p>
          <p>Privacy policy</p>
          <p>Cookie policy</p>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by Indian Best Chef Ltd</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
