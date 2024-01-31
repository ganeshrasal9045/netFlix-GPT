import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const BrowseNav = () => {
  const user = useSelector(store => store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
    };

  return (
    <div className="flex justify-between items-center absolute w-screen px-20 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      <div className="flex items-center p-2">
        <img
          className="w-14 rounded-full"
          src={user.photoURL}
          alt="user-icon"
        />
        <button
          className="ml-2 bg-red-700 text-white text-base py-1 px-2 rounded-lg hover:bg-slate-200 hover:text-indigo-950 hover:border-2 hover:border-red-900"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default BrowseNav;
