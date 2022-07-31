import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";

const NotFound = () => {
  return (
    <div className="bg-base-100">
      <div className="flex justify-center items-center h-[85vh]">
        <img className="rounded-lg md:w-[500px] lg:w-[700px]" src='https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page_1150-48326.jpg?w=996&t=st=1659280819~exp=1659281419~hmac=1dc414aebde60bc331e9e03ea73d6837e0b552e72e49c6320550e507f2b16822' alt="" />
      </div>
      <div className="flex justify-center items-center mt-[-100px] md:mt-[-50px]">
      <Link to="/" className="btn btn-primary text-white"><MdOutlineArrowBackIos/>Go back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
