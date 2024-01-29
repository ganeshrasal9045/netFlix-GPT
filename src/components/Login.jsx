import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm, setisSignInForm] = useState(true)

    const toggleSignInForm = () => {
        setisSignInForm(!isSignInForm)
    }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bg-img"
        />
      </div>

      <div className=" absolute mx-auto right-0 left-0 top-20 bottom-0 mt-40 w-full bg-black bg-opacity-80 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
            {isSignInForm? "Sign In" : "Sign Up"}
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
          {!isSignInForm && <div>
              <input
                type="name"
                name="name"
                id="name"
                className="bg-gray-700 bg-opacity-50 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Full Name"
                required=""
              />
            </div>}
            <div>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-700 bg-opacity-50 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email or phone number"
                required=""
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="bg-gray-700 bg-opacity-50  border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-lg">
                  <label for="remember" className="text-white">
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="text-lg font-medium text-white hover:underline dark:text-blue-500"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-red-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

            >
              {isSignInForm ? "Sign in": "Sign up"}
            </button>
            <p className="text-lg font-light my-4 text-gray-200 dark:text-gray-400">
              {isSignInForm ? "New to Netflix?" : "Already registered? "}
              <span
                className="ml-2 text-base font-medium text-white cursor-pointer hover:underline dark:text-blue-500"
                onClick={toggleSignInForm}
              >
                {isSignInForm ? "Sign up now." : "Sign in now."}
              </span>
            </p>
            <p className="text-sm font-extralight text-white">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <a
                href="#"
                className="ml-2 font-medium text-white hover:underline dark:text-blue-500"
              >
                Learn more.
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
