import React from "react";
import { Link, useRouteError } from "react-router-dom";
import "./Error.css";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Error = () => {
  const { error, status } = useRouteError();
  return (
    <>
      <Navbar></Navbar>
      <section className="ErrorPageContainer">
        <div>
          <img
            className="rounded-3xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcdIKa8G-R0rqnYWuKVfSqMpbV0GAbKrmqWA&usqp=CAU"
            alt="image"
          />
          <div>
            <h2 className="ErrorTitle">
              <span>Error</span>
              {status || 404}
            </h2>
            <p className="ErrorMessage">{error?.message}</p>
            <Link to="/" className="btnBackToHome">
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Error;
