import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { NETFLIX_BG_IMG } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className='h-screen object-cover md:w-screen md:object-cover' src={NETFLIX_BG_IMG} alt="bg-img" />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
}

export default GptSearch