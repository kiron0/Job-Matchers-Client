import React from "react";
import useTitle from "../../../Hooks/useTitle";
import Banner from "../Banner/Banner";

const Home = () => {
  useTitle("Home page");
  return (
    <>
      <Banner />
    </>
  );
};

export default Home;
