import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import moviesList from "../movies.json";
import MovieCard from "../components/MovieCard";

const MainPage = () => {
  console.log(moviesList);
  const [searchMovie, setSearchMovie] = useState("");
  // const url = "http://www.omdbapi.com/?i=tt3896198&apikey=5219cd68";

  const fetchMovies = async () => {
    // const response = await fetch(moviesList);
    // const data = await response.json();
    // console.log(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);
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
      <div className="main-container">
        <div className="search-container">
          <form>
            <input type="text" placeholder="Enter a movie..." />
            <button>Search</button>
          </form>
        </div>
        <div className="line"></div>
        <div className="movie-display-container">
          {moviesList.map((movie, index) => {
            const { Title: title, Poster: poster } = movie;
            console.log(title, poster);
            return <MovieCard title={title} poster={poster} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MainPage;
