import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../store/moviesSlice";

const useUpcomingMovies = () => {

  const upcomingMovies = useSelector(store => store.movies.upcomingMovies);

  // Fetch Data from TMDB Api and update store

  const dispatch = useDispatch();

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };
};

export default useUpcomingMovies;
