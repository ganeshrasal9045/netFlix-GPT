import React from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config?.lang);
    
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black bg-opacity-75 w-1/2 grid grid-cols-12 text-lg rounded-md">
        <input
          className="p-4 m-3 col-span-9"
          type="text"
          name="search"
          placeholder={lang[langKey].gptSearchPlacehodler}
        />
        <button className="col-span-3 m-4 px-4 py-2 bg-red-700 hover:bg-pink-700 text-white rounded-lg">
          {lang[langKey].Search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar