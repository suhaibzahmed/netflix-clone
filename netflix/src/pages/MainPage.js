import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import moviesList from "../movies.json";
import MovieCard from "../components/MovieCard";
import { requests } from "./API_Requests";
import MovieRows from "../components/MovieRows";
import SearchMovieResult from "../components/SearchMovieResult";

const MainPage = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  // const [movies, setMovies] = useState([]);
  const {
    fetchTrending,
    fetchNetflixOrig,
    fetchTopRated,
    fetchActionMovies,
    fetchComedyMovies,
    fetchHorrorMovies,
    fetchRomanticMovies,
    fetchDocumentaries,
  } = requests;

  const url = "https://api.themoviedb.org/3";

  const fetchMovies = async () => {
    const response = await fetch(
      `${url}/search/movie?api_key=4ead775cc4cb369acc59bd25925843bf&query=${searchMovie}`
    );
    const data = await response.json();
    setSearchResult(data.results);
    // console.log(searchResult);
  };

  useEffect(() => {
    fetchMovies();
  }, [searchMovie]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(searchMovie);
  };
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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter a movie..."
              value={searchMovie}
              onChange={(e) => setSearchMovie(e.target.value)}
            />
            <button>Search</button>
          </form>
        </div>
        <div className="line"></div>
        {!searchMovie || searchMovie.length <= 1 ? (
          <div className="movie-display-container">
            <MovieRows
              fetchUrl={url + fetchTrending}
              heading="Trending Movies"
            />
            <MovieRows
              fetchUrl={url + fetchNetflixOrig}
              heading="Netflix Originals"
            />
            <MovieRows fetchUrl={url + fetchTopRated} heading="Top Rated" />
            <MovieRows
              fetchUrl={url + fetchActionMovies}
              heading="Action Movies"
            />
            <MovieRows
              fetchUrl={url + fetchComedyMovies}
              heading="Comedy Movies"
            />
            <MovieRows
              fetchUrl={url + fetchHorrorMovies}
              heading="Horror Movies"
            />
            <MovieRows
              fetchUrl={url + fetchRomanticMovies}
              heading="Romantic Movies"
            />
            <MovieRows
              fetchUrl={url + fetchDocumentaries}
              heading="Documentaries"
            />
          </div>
        ) : (
          <div className="movie-search-container">
            {searchResult.map((movie) => {
              const { title, poster_path, id } = movie;
              // console.log(title, poster_path);
              return (
                <SearchMovieResult
                  title={title}
                  poster_path={poster_path}
                  id={id}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default MainPage;
