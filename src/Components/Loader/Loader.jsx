import React from "react";
import HashLoader from "react-spinners/HashLoader";
const Loader = () => {
  return (
    <div className="text-center py-28">
      <HashLoader color={"#1c95f8"} size={100} />
    </div>
  );
};

export default Loader;
