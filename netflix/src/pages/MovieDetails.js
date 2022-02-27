import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./MovieDetails.css";
import { FaStar } from "react-icons/fa";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  //   const [cast, setCast] = useState([]);
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=4ead775cc4cb369acc59bd25925843bf`;
  const url2 = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=4ead775cc4cb369acc59bd25925843bf`;

  //   const fetchCast = async () => {
  //     const response = await fetch(url2);
  //     const data = await response.json();
  //     // console.log(data);
  //     setCast(data);
  //     console.log(cast);
  //   };

  const fetchMovie = async () => {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setMovie(data);
  };

  useEffect(() => {
    fetchMovie();
    // fetchCast();
  }, []);
  //   console.log(id);
  //   console.log(movie);

  return (
    <>
      <nav className="navbar2">
        <Link to="/home">
          <img
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="netflix logo"
          />
        </Link>
        <Link to="/">
          <button className="sign-out">Sign Out</button>
        </Link>
      </nav>
      <div className="movie-details-container">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          />
        </div>
        <div className="movie-details">
          <div className="movie-title-rating">
            <p>{movie.title}</p>
            <div>
              {movie.vote_average}
              <span>
                <FaStar />
              </span>
            </div>
          </div>
          <div className="year-runtime">
            <p>
              {movie.release_date}
              <span></span>
              {movie.runtime} min
            </p>
          </div>
          <div className="overview">
            <h1>OVERVIEW</h1>
            <div className="line-2"></div>
            <p>{movie.overview}</p>
          </div>

          {/* additional code for cast and genre */}

          {/* <div className="genre">
            <p className="genre-head">Genre: </p>
            {movie.genres.map((genre) => {
              return <p className="genre-list">{genre.name},</p>;
            })}
          </div>

          <div className="cast">
            <p className="genre-head">Cast: </p>
            {movie.genres.map((genre) => {
              return <p className="genre-list">{genre.name},</p>;
            })}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
