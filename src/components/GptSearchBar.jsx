import React, { useRef } from 'react'
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResults } from '../store/gptSlice';

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config?.lang);

    const dispatch = useDispatch();

    const searchText = useRef(null);

    // search movie in TMDB
    const searchMovieTMDB = async(movie) => {
        const data = await fetch(
          "https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1",
          API_OPTIONS
        );

        const json = await data.json();
        return json.results;
    }

    const handleGptSearchClick = async() => {
        // console.log(searchText.current.value);

        // Mkae an API call to GPT API and get Movie Search Results

        const gptQuery =
          "Act as a Movie Recommendation system and suggest some movies for the query: " +
          searchText.current.value +
          ". only give me name of 5 movies, coma seperated like the example result given ahead. Example Result: Don, Sholay, Nayak, Welcome, Hera-pheri";
        
        const gptSearchResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });

        if(!gptSearchResult.choices) {
            //take on error page
        };

        // console.log(gptSearchResult.choices?.[0]?.message?.content);

        // "Andaz Apna Apna, Jaane Bhi Do Yaaro, Chupke Chupke, Gol Maal, Bawarchi"
        const gptMovies = gptSearchResult.choices?.[0]?.message?.content.split(", ");

        // ['Andaz Apna Apna', 'Jaane Bhi Do Yaaro', 'Chupke Chupke', 'Gol Maal', 'Bawarchi']

        // For each movie i will search TMDB API

        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

        const tmdbResults = await Promise.all(promiseArray);
        // console.log(tmdbResults);

        searchText.current.value = "";

        dispatch(addGptMovieResults({movieNames:gptMovies, movieResults:tmdbResults}));
    }
    
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black bg-opacity-75 w-1/2 grid grid-cols-12 text-lg rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-3 col-span-9"
          type="text"
          name="search"
          placeholder={lang[langKey].gptSearchPlacehodler}
        />
        <button
          className="col-span-3 m-4 px-4 py-2 bg-red-700 hover:bg-pink-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].Search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar