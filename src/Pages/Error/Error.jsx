import React from "react";
import { Link, useRouteError } from "react-router-dom";
import "./Error.css";

const Error = () => {
  const { error, status } = useRouteError();
  return (
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
  );
};

export default Error;
