import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { addUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { NETFLIX_BG_IMG, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // validate the form data

    console.log(email.current.value);
    console.log(password.current.value);
    // console.log(name.current.value);

    const message = checkValidData(
      email.current.value,
      password.current.value
    );
    console.log(message);
    setErrorMessage(message);
    if (message) return;

    // SignIn/SignUp Logic
    if (!isSignInForm) {
      // SignUp Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("signUp", user);

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessages = error.message;
          setErrorMessage(errorCode + "-" + errorMessages);
        });
    } else {
      // SignIn Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("LoggedIn", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessages = error.message;
          setErrorMessage(errorCode + "-" + errorMessages);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={NETFLIX_BG_IMG}
          alt="bg-img"
        />
      </div>

      <div className=" absolute mx-auto right-0 left-0 top-20 bottom-auto  mt-40 w-full bg-black bg-opacity-80 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4 md:space-y-6"
          >
            {!isSignInForm && (
              <div>
                <input
                  ref={name}
                  type="name"
                  name="name"
                  id="name"
                  className="bg-gray-700 bg-opacity-50 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Full Name"
                  required=""
                />
              </div>
            )}
            <div>
              <input
                ref={email}
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
                ref={password}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="bg-gray-700 bg-opacity-50  border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            {errorMessage === null ? null : (
              <p>
                <span className="text-xs font-medium text-red-900 px-1 py-2 my-2 bg-white rounded-md">
                  ⚠️ {errorMessage}
                </span>
              </p>
            )}

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
                  <label htmlFor="remember" className="text-white">
                    Remember me
                  </label>
                </div>
              </div>
              <span className="text-lg font-medium text-white hover:underline dark:text-blue-500">
                Forgot password?
              </span>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-red-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleButtonClick}
            >
              {isSignInForm ? "Sign in" : "Sign up"}
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
              <span className="ml-2 font-medium text-white hover:underline dark:text-blue-500">
                Learn more.
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
