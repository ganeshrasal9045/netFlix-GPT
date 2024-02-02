import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);

  return (
    <div className='bg-black text-white '>
      <div className=' -mt-52 px-10 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies?.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
      <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer
{/*
MovieList - Popular
  - Moviecards * n
MovieList - NowPlaying
MovieList - Trending
MovieList - MostWatched
*/}