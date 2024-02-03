import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../store/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useTrailerVideo = (movieId) => {

  const trailerVideo = useSelector(store => store.movies.trailerVideo);

    const dispatch = useDispatch();

    // fetch trailer video && updating the store with trailer video data

    useEffect(() => {
      !trailerVideo && getMovieVideos();
    }, [])

    const getMovieVideos = async() => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/" +
            movieId +
            "/videos?language=en-US",
          API_OPTIONS
        );
        const json = await data.json();
        // console.log("movieTrailer", json.results);

        const filterData = json.results.filter((video) => video.name === "Official Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0];
        // console.log("trailer", trailer);
        dispatch(addTrailerVideo(trailer))
    };
};

export default useTrailerVideo;