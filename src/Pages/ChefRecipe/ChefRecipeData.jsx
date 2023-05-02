import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RecipeDisplay from "./RecipeDisplay";

const ChefRecipeData = () => {
  const [RecipeData, setRecipeData] = useState([]);
  const id = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/chefRecipe`)
      .then((res) => res.json())
      .then((data) => {
        const SelectedRecipe = data.find((selected) => selected.id === id.id);
        setRecipeData(SelectedRecipe);
      });
  }, []);

  return (
    <section>
      <div className="py-10">
        <div>
          <div className="flex items-center justify-center">
            <img
              className="rounded-lg w-3/5"
              src={RecipeData.bannerImage}
              alt={RecipeData.chefName}
            />
          </div>
          <div className="md:flex items-center justify-center pt-8 md:ms-0 ms-4">
            <img
              className="rounded-lg md:w-1/5"
              src={RecipeData.chefImage}
              alt={RecipeData.chefName}
            />
            <div className="md:ms-8 md:w-1/2 w-11/12">
              <h1 className="text-xl">
                <span className="font-semibold">Name:</span>{" "}
                <span className="text-gray-500">{RecipeData.chefName}</span>
              </h1>
              <h1 className="text-xl">
                <span className="font-semibold">ExPerience:</span>{" "}
                <span className="text-gray-500">{RecipeData.experience}</span>
              </h1>
              <h1 className="text-xl">
                <span className="font-semibold">Total Recipe:</span>{" "}
                <span className="text-gray-500">{RecipeData.recipeNumber}</span>
              </h1>
              <h1 className="text-xl">
                <span className="font-semibold">Like:</span>{" "}
                <span className="text-gray-500">{RecipeData.likeNumber}</span>
              </h1>
              <h1 className="text-justify text-xl">
                <span className="font-semibold">Bio:</span>{" "}
                <span className="text-gray-500">{RecipeData.bio}</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-5xl font-bold pb-8 text-center">Recipe</h1>
        <div className="w-10/12 mx-auto">
          {RecipeData?.recipes?.map((recipe) => (
            <RecipeDisplay
              key={recipe.recipeId}
              recipe={recipe}
            ></RecipeDisplay>
          ))}
        </div>
      </div>
      <div className="text-center py-8">
        <button className="btn btn-active btn-ghost">
          <Link to="/">Go to Home</Link>
        </button>
      </div>
    </section>
  );
};

export default ChefRecipeData;
