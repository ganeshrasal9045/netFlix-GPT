import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const gpt = useSelector(store => store.gpt);
  const {movieNames, movieResults} = gpt;

  if(!movieNames) return null;


  return (
    <div className="px-6 py-4 mx-6 my-4 bg-black bg-opacity-75 rounded-md text-white">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default GptMovieSuggestions