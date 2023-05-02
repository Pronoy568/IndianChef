import React from "react";

<<<<<<< HEAD
const RecipeDisplay = () => {
  return <div></div>;
=======
const RecipeDisplay = ({ recipe }) => {
  const { cookingMethod, description, ingredient, name, rating, recipesImage } =
    recipe;
  return (
    <div className="md:flex p-5 mb-5 rounded-lg border-2 border-gray-200 bg-gray-100">
      <img
        className="md:w-1/4 w-3/5 rounded-xl"
        src={recipesImage}
        alt={name}
      />
      <div className="md:ms-5 ms-0">
        <h1 className="text-3xl font-semibold md:mt-0 mt-3">{name}</h1>
        <p className="text-justify my-2">{description}</p>
        <p>{rating}</p>
        <div>
          {/* The button to open modal */}
          <label htmlFor="my-modal-3" className="btn">
            open modal
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">
                Congratulations random Internet user!
              </h3>
              <p className="py-4">
                You've been selected for a chance to get one year of
                subscription to use Wikipedia for free!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
>>>>>>> c007fe46900381ff3d3f6eae35bb27e344fdc3a6
};

export default RecipeDisplay;
