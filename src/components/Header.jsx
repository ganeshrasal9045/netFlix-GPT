import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO } from "../utils/constants";


const Header = () => {
  const user = useSelector(store => store?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Check if user is authenticated upon initialization.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component is unmounts
    return() => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
      });
  };
  
  return (
    <div className="flex justify-between items-center absolute w-full px-20 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-44 "
        src={NETFLIX_LOGO}
        alt="logo"
      />

      {user && <div className="flex items-center p-2">
        <img
          className="w-12 rounded-md"
          src={user?.photoURL}
          alt="user-icon"
        />
        <button
          className="ml-2 bg-red-700 text-white text-base py-1 px-2 rounded-lg hover:bg-slate-200 hover:text-indigo-950 hover:border-2 hover:border-red-900"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>}

    </div>
  );
};

export default Header;
