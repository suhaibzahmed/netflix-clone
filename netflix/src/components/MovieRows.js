import React, { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import "./MovieRows.css";
import { v4 as uuidv4 } from "uuid";

const MovieRows = ({ fetchUrl, heading }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await fetch(fetchUrl);
    const data = await response.json();

    setMovies(data.results);
    // console.log(movies);
  };

  //   console.log(movies);

  useEffect(() => {
    fetchMovies();
  }, []);
  //   console.log(fetchUrl);

  return (
    <>
      <h1 className="movie-type">{heading}</h1>
      <div className="single-row">
        {movies.map((movie) => {
          const { title, poster_path, id } = movie;
          const { name } = movie;
          if (title) {
            return (
              <div className="movie-card-container">
                <MovieCard
                  id={id}
                  title={title}
                  poster={`https://image.tmdb.org/t/p/original/${poster_path}`}
                  movies={movies}
                />
              </div>
            );
          }
          if (name) {
            return (
              <div className="movie-card-container">
                <MovieCard
                  id={id}
                  title={name}
                  poster={`https://image.tmdb.org/t/p/original/${poster_path}`}
                  movies={movies}
                />
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default MovieRows;
