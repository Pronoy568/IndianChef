import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import ChefRecipeData from "../Pages/ChefRecipe/ChefRecipeData";
import Error from "../Pages/Error/Error";
import ChefNav from "../Pages/ChefNav/ChefNav";
import Login from "../Pages/Authentication/Login/Login";
import Blog from "../Pages/Blog/Blog";
import Registration from "../Pages/Authentication/Registration/Registration";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/chefRecipes/:id",
        element: <ChefRecipeData />,
      },
      {
        path: "/chef",
        element: <ChefNav />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default Route;
