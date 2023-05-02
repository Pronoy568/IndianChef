import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Benefit from "../Benefit/Benefit";
import Chef from "../Chef/Chef";
import News from "../News/News";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Benefit></Benefit>
      <Chef></Chef>
      <Category></Category>
      <News></News>
    </div>
  );
};

export default Home;
