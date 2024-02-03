import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../store/moviesSlice";

const useTopRatedMovies = () => {

  const topRatedMovies = useSelector(store => store.movies.topRatedMovies);

  // Fetch Data from TMDB Api and update store

  const dispatch = useDispatch();

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };
};

export default useTopRatedMovies;
