import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);

  // early return statement
  if(!movies) return;

  const mainMovie = movies[0];
  // console.log("mainMovie", mainMovie);

  const {original_title, overview, id} = mainMovie;

  return (
    <div className='overflow-x-hidden bg-blue-900 pt-[30%] md:pt-0'>
      <VideoTitle title={original_title} overview={overview} /> 
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer