import React from 'react'
import Header from './Header'
import useNowplayingMovies from '../hooks/useNowplayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowplayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      {/* <SecondaryContainer /> */}
    </div>
  )
}

export default Browse