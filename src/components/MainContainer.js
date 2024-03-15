import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.trendingMovies);

  if (movies === null) return;

  // Generate a random number between 0 and 19
  function generateRandomNumber() {
    return Math.floor(Math.random() * 6);
  }

  // Call the function and print the result
  const randomNumber = generateRandomNumber();

  const mainMovie = movies[randomNumber];

  const { original_title, overview, id } = mainMovie;
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
