import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ movieId, posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 md:hover:scale-95 md:transition pr-4">
      <Link to={`/browse/showmovie/${movieId}`}>
        {" "}
        <img src={IMG_CDN_URL + posterPath} alt="Movie Card" />
      </Link>
    </div>
  );
};

export default MovieCard;
