import { useDispatch, useSelector } from "react-redux";
import { addSimilarMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useSimilarMovies = (movieId) => {
  const dispatch = useDispatch();

  const similarMovies = useSelector((store) => store.movies.similarMovies);

  const getSimilarMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);

    dispatch(addSimilarMovies(json.results));
  };

  useEffect(() => {
    !similarMovies && getSimilarMovies();
  }, []);
};

export default useSimilarMovies;
