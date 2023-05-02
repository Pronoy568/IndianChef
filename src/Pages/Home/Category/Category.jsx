import React from "react";

const Category = () => {
  return (
    <div className="w-9/12 mx-auto">
      <h1 className="text-center text-5xl font-bold pt-5">Recipe Category</h1>
      <div className="grid md:grid-cols-6 grid-cols-2 gap-8 py-12">
        <div>
          <img
            src="http://neptune.pinsupreme.com/wp-content/uploads/2015/09/356.png"
            alt="image"
          />
          <h1 className="text-2xl font-bold m-2">Chicken</h1>
        </div>
        <div>
          <img
            src="http://neptune.pinsupreme.com/wp-content/uploads/2015/09/341.png"
            alt="image"
          />
          <h1 className="text-2xl font-bold m-2">Fast Food</h1>
        </div>
        <div>
          <img
            src="http://neptune.pinsupreme.com/wp-content/uploads/2015/09/349.png"
            alt="image"
          />
          <h1 className="text-2xl font-bold m-2">Fish</h1>
        </div>
        <div>
          <img
            src="http://neptune.pinsupreme.com/wp-content/uploads/2015/09/306.png"
            alt="image"
          />
          <h1 className="text-2xl font-bold m-2">Pizza</h1>
        </div>
        <div>
          <img
            src="http://neptune.pinsupreme.com/wp-content/uploads/2015/09/45.png"
            alt="image"
          />
          <h1 className="text-2xl font-bold m-2">Salads</h1>
        </div>
        <div>
          <img
            src="http://neptune.pinsupreme.com/wp-content/uploads/2015/09/85.png"
            alt="image"
          />
          <h1 className="text-2xl font-bold m-2">Soups</h1>
        </div>
      </div>
    </div>
  );
};

export default Category;
