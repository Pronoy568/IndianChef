import React from "react";

const Category = () => {
  return (
    <div className="w-9/12 mx-auto">
      <h1 className="text-center text-5xl font-bold pt-5">Recipe Category</h1>
      <div className="grid md:grid-cols-6 grid-cols-2 gap-8 py-12">
        <div>
          <img src="https://i.ibb.co/4ZKLwRP/1.png" alt="image" />
          <h1 className="text-2xl font-bold m-2">Chicken</h1>
        </div>
        <div>
          <img src="https://i.ibb.co/P9PSDWK/2.png" alt="image" />
          <h1 className="text-2xl font-bold m-2">Fast Food</h1>
        </div>
        <div>
          <img src="https://i.ibb.co/PwXPFFx/3.png" alt="image" />
          <h1 className="text-2xl font-bold m-2">Fish</h1>
        </div>
        <div>
          <img src="https://i.ibb.co/yYJm9hh/4.png" alt="image" />
          <h1 className="text-2xl font-bold m-2">Pizza</h1>
        </div>
        <div>
          <img src="https://i.ibb.co/bKt7FkC/5.png" alt="image" />
          <h1 className="text-2xl font-bold m-2">Salads</h1>
        </div>
        <div>
          <img src="https://i.ibb.co/vkZs1cY/6.png" alt="image" />
          <h1 className="text-2xl font-bold m-2">Soups</h1>
        </div>
      </div>
    </div>
  );
};

export default Category;
