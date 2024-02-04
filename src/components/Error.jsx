import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  // console.log(err);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="relative">
      <div className="absolute">
        <div className="absolute">
          <img
            className="px-4 md:px-20 pt-2 md:pt-5"
            src="https://assets.nflxext.com/en_us/home/logo_v7.png"
            alt="netflix-logo"
          />
        </div>
        <img
          className="w-full h-screen object-cover md:w-screen"
          src="https://assets.nflxext.com/ffe/siteui/pages/errors/bg-lost-in-space.png"
          alt="error-img"
        />
      </div>
      <div className="absolute text-center mx-4 md:mx-0 top-20 md:top-1/4 left-4 md:left-20 right-4 md:right-20 bottom-4 md:bottom-15">
        <h1 className="text-3xl md:text-6xl font-medium text-white py-2 md:py-6">
          Lost your way?
        </h1>
        <h3 className="text-base md:text-2xl font-normal text-white py-2">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </h3>
        <button
          className="bg-white my-2 md:my-4 px-4 md:px-6 py-1 md:py-2 rounded-md text-base md:text-lg font-medium hover:bg-red-700 hover:text-white"
          onClick={handleClick}
        >
          Netflix Home
        </button>
        <h2 className="text-xl md:text-4xl my-1 md:my-2">
          <span className="text-red-900">|</span>
          <span className="text-white">Error Code</span>
          <span className="font-semibold text-red-900">NSES-404</span>
        </h2>
      </div>
    </div>
  );
};

export default Error;
