import React from "react";

const ChefDisplay = (props) => {
  const { chefName, chefImage, experience, recipeNumber, likeNumber, id, bio } =
    props.chef;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="flex items-center justify-center">
          <figure>
            <img className="rounded-lg" src={chefImage} alt={chefName} />
          </figure>
          <div className="px-4 text-justify">
            <h1 className="card-title text-xl font-bold">{chefName}</h1>
            <h1>Experience: {experience}</h1>
            <h1>RecipeNumber: {recipeNumber}</h1>
            <h1>LikeNumber: {likeNumber}</h1>
          </div>
        </div>
        <div className="p-3 text-justify">
          {/* <p>{bio}</p> */}
          <p>{bio.slice(0, 130)}...</p>
        </div>
        <div className="card-actions flex items-center justify-center my-4">
          <button className="btn btn-primary">View Recipes Button</button>
        </div>
      </div>
    </div>
  );
};

export default ChefDisplay;
