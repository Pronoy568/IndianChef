import React from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefDisplay = (props) => {
  const { chefName, chefImage, experience, recipeNumber, likeNumber, id, bio } =
    props.chef;

  return (
    <div>
      <div className="card w-96 bg-base-100 hover:bg-slate-200 shadow-xl pt-3">
        <div className="flex items-center justify-center">
          <figure>
            <LazyLoad offset={300} threshold={0.95}>
              <img className="rounded-lg" src={chefImage} alt={chefName} />
            </LazyLoad>
          </figure>
          <div className="px-4 text-justify">
            <h1 className="card-title text-xl font-bold">{chefName}</h1>
            <h1>
              <span className="font-semibold">Experience: </span>
              {experience}
            </h1>
            <h1>
              <span className="font-semibold">Total Recipe:</span>{" "}
              {recipeNumber}
            </h1>
            <h1>
              <span className="font-semibold">Like:</span> {likeNumber}
            </h1>
          </div>
        </div>
        <div className="p-3 text-justify">
          {/* <p>{bio}</p> */}
          <p>{bio.slice(0, 130)}...</p>
        </div>
        <div className="card-actions flex items-center justify-center my-4">
          <button className="btn btn-active btn-ghost">
            <Link to={`/chefRecipes/${id}`}>View Recipes Button</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefDisplay;
