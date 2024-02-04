import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({title, movies}) => {
    // console.log(movies);

  return (
    <div>
        <h1 className="text-lg md:text-xl font-medium py-2">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies &&
            movies.map((movie) => (
              <MovieCards key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
