import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCards = ({posterPath}) => {

  if(!posterPath) return null;

  return (
    <div className="w-40 md:w-36 mx-1 pr-1 md:mx-0 md:pr-2">
      <img
        className="rounded-lg cursor-pointer"
        src={IMG_CDN_URL + posterPath}
        alt="movie-cards"
      />
    </div>
  );
}

export default MovieCards