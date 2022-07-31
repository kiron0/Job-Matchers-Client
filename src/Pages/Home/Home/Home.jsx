import React from "react";
import useTitle from "../../../Hooks/useTitle";
import Banner from "../Banner/Banner";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Banner />
    </>
  );
};

export default Home;
