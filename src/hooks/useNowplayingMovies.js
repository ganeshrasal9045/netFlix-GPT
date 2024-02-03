import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../store/moviesSlice";

const useNowplayingMovies = () => {

  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

  // Fetch Data from TMDB Api and update store

  const dispatch = useDispatch();

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };
};

export default useNowplayingMovies;
