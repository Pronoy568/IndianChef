import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import ChefRecipeData from "../Pages/ChefRecipe/ChefRecipeData";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/chefRecipes/:id",
        element: <ChefRecipeData />,
      },
    ],
  },
]);

export default Route;
