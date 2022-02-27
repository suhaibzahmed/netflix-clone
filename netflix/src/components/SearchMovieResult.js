import React from "react";
import { Link } from "react-router-dom";
import "./SearchMovieResult.css";

const SearchMovieResult = ({ title, poster_path, id }) => {
  return (
    <Link to={`/movie/${id}`}>
      <div className="search-movie-container">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt={title}
          />
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchMovieResult;
