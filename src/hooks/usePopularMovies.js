import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../store/moviesSlice";

const usePopularMovies = () => {

  const popularMovies = useSelector(store => store.movies.popularMovies);

  // Fetch Data from TMDB Api and update store

  const dispatch = useDispatch();

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };
};

export default usePopularMovies;
