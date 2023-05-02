import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Benefit from "../Benefit/Benefit";
import Chef from "../Chef/Chef";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Benefit></Benefit>
      <Chef></Chef>
      {/* <Category></Category> */}
    </div>
  );
};

export default Home;
