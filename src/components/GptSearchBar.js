import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { textModel } from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  // const handleGptSearchClick = async () => {

  //   // console.log(searchText.current.value);
  //   //make an api call to get the movie results

  //   const gptQuery =
  //     "Act as a Movie Recommendation system and suggest some movies for the query : " +
  //     searchText.current.value +
  //     ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result : John Wick, Pathaan, Jawan, Salar, Fast & Furious";

  //   const gptResults = await openai.chat.completions.create({
  //     messages: [{ role: "user", content: gptQuery }],
  //     model: "gpt-3.5-turbo",
  //   });
  //   //if(!gptResults.choices)  write error handling

  //   // console.log(gptResults?.choices[0]?.message?.content);

  //   const gptMovies = gptResults?.choices[0]?.message?.content.split(",");

  //   const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

  //   const tmdbResults = await Promise.all(promiseArray);
  //   console.log(tmdbResults);

  //   dispatch(
  //     addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults })
  //   );
  // };
  // Movie recommendation handler component
  const handleGptSearchClick = async () => {
    try {
      const prompt = `Act as a movie recommendation system. 
      Suggest 5 movies for: "${searchText.current.value}".
      Return ONLY comma-separated names. 
      Example: Inception, The Dark Knight, Interstellar, Tenet, Memento`;

      // Generate content
      const result = await textModel.generateContent(prompt);
      const response = await result.response;

      if (!response.text()) {
        throw new Error("Empty response from Gemini");
      }

      // Clean and parse response
      const moviesString = response
        .text()
        .replace(/["*•]/g, "") // Remove special characters
        .replace(/\d+\./g, "") // Remove numbering
        .trim();

      const gptMovies = moviesString
        .split(",")
        .map((movie) => movie.trim().replace(/\.$/, ""));

      // TMDB integration
      const tmdbResults = await Promise.all(
        gptMovies.map((movie) => searchMovieTMDB(movie))
      );

      dispatch(
        addGptMovieResults({
          movieNames: gptMovies,
          movieResults: tmdbResults,
        })
      );
    } catch (error) {
      console.error("Gemini API Error:", error);
      // Add user-friendly error handling
      dispatch(
        // setError("Failed to get movie recommendations. Please try again.")
        console.log("Failed to get movie recommendations. Please try again.")
      );
    }
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2  bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} /> &nbsp;{" "}
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
