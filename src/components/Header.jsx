import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../store/gptSlice";
import { changeLanguage } from "../store/configSlice";


const Header = () => {
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

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

  const gptSearchHandleClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }
  
  return (
    <div className="flex justify-between items-center absolute w-full px-20 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44 " src={NETFLIX_LOGO} alt="logo" />

      {user && (
        <div className="flex items-center p-2">
          {showGptSearch && (
            <select
              className="bg-indigo-950 text-white px-4 py-1 mx-2 rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-indigo-950 text-white px-4 py-1 mx-2 rounded-lg hover:bg-pink-700"
            onClick={gptSearchHandleClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img
            className="w-10 rounded-md"
            src={user?.photoURL}
            alt="user-icon"
          />
          <button
            className="ml-2 bg-red-700 text-white text-base py-1 px-2 rounded-lg hover:bg-pink-700  hover:border-2 hover:border-red-900"
            onClick={handleSignOut}
          >
           <span className="text-xl">&#8680;</span> Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
