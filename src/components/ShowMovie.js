import { useSelector } from "react-redux";
import useSimilarMovies from "../hooks/useSimilarMovies";
import MovieList from "./MovieList";
import ShowMovieVideo from "./ShowMovieVideo";
import { useParams } from "react-router-dom";
import { BG_URL } from "../utils/constants";

const ShowMovie = () => {
  const movies = useSelector((store) => store.movies);
  const { movieId } = useParams();
  useSimilarMovies(movieId);
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover md:w-screen"
          src={BG_URL}
          alt="background img"
        />
      </div>
      <div className="bg-black  pb-10">
        <ShowMovieVideo movieId={movieId} />
        <MovieList title={"Similar Movies"} movies={movies.similarMovies} />
      </div>
    </>
  );
};

export default ShowMovie;
