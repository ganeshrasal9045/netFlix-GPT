import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/")
    };

  return (
    <div>
      <div className="absolute">
        <div className="absolute">
          <img
            className="px-20 pt-5"
            src="https://assets.nflxext.com/en_us/home/logo_v7.png"
            alt=""
          />
        </div>
        <img
          className="w-screen"
          src="https://assets.nflxext.com/ffe/siteui/pages/errors/bg-lost-in-space.png"
          alt="error-img"
        />
      </div>
      <div className=" absolute text-center mx-0 top-20 left-20 right-20 bottom-15">
        <h1 className="text-6xl font-medium text-white py-6">Lost your way?</h1>
        <h3 className="text-2xl font-normal text-white py-2">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </h3>
        <button className="bg-white my-4 px-6 py-2 rounded-md text-lg font-medium hover:bg-red-700 hover:text-white"
        onClick={handleClick}>
          Netflix Home
        </button>
        <h2 className="text-4xl my-2">
          <span className="text-red-900">|</span>{" "}
          <span className="text-white">Error Code</span>{" "}
          <span className="font-semibold text-red-900">NSES-404</span>
        </h2>
      </div>
    </div>
  );
};

export default Error;
