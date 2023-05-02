import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner flex items-center justify-center text-center">
      <div>
        <h1 className="text-white text-5xl font-bold">
          Welcome to the Indian
          <br /> <span className="text-sky-500">Best Chef Recipe</span>
        </h1>
        <button className="btn btn-active btn-primary mt-4">Explore</button>
      </div>
    </div>
  );
};

export default Banner;
