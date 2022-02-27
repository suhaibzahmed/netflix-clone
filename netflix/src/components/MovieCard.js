import React from "react";
import { Link, useParams } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ title, poster, id, movies }) => {
  //   console.log(movies);
  return (
    <Link to={`/movie/${id}`}>
      <div className="movie-card">
        <div>
          <img src={poster} alt={title} />
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
