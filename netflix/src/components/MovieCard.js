import React from "react";
import "./MovieCard.css";

const MovieCard = ({ title, poster }) => {
  return (
    <div className="movie-card">
      <div>
        <img src={poster} alt={title} />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default MovieCard;
