import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipeDisplay = ({ recipe }) => {
  const {
    cookingMethod,
    description,
    ingredients,
    name,
    rating,
    recipesImage,
    recipeId,
  } = recipe;
  const [toastShow, setToastShow] = useState(false);

  const toastHandle = () => {
    toast(`${name} is your favorite!`);
    setToastShow(true);
  };

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
        <div className="tooltip tooltip-right" data-tip={rating}>
          <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
        </div>

        <div className="py-5 flex flex-wrap">
          <div className="me-5">
            <label htmlFor={name} className="btn">
              Cooking Method
            </label>

            <input type="checkbox" id={name} className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor={name}
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h1 className="text-xl font-semibold text-center">{name}</h1>
                <p className="py-4 text-justify">{cookingMethod}</p>
              </div>
            </div>
          </div>
          <div className="me-5">
            <label htmlFor={recipeId} className="btn">
              Ingredient
            </label>

            <input type="checkbox" id={recipeId} className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor={recipeId}
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h1 className="text-xl font-semibold text-center">{name}</h1>
                <p className="py-4 text-justify">{ingredients}</p>
              </div>
            </div>
          </div>
          <button
            onClick={toastHandle}
            className="btn mt-5 md:mt-0"
            disabled={toastShow}
          >
            Favorite Button
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default RecipeDisplay;
