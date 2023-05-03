import React, { useEffect } from "react";
import { useState } from "react";
import ChefDisplay from "./ChefDisplay";

const Chef = () => {
  const [chefData, setChefData] = useState([]);

  useEffect(() => {
    fetch(`https://indian-best-chef-server.vercel.app/chefRecipe`)
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, []);

  return (
    <div className="text-center w-10/12 mx-auto  py-12" id="chef">
      <h1 className="text-5xl font-bold pb-8">Chef Information</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        {chefData.map((chef) => (
          <ChefDisplay key={chef.id} chef={chef}></ChefDisplay>
        ))}
      </div>
    </div>
  );
};

export default Chef;
