import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//9e76c521

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=9e76c521";

const movie1 = {
  Title: "Spiderman",
  Year: "1990",
  imdbID: "tt0100669",
  Type: "movie",
  Poster: "N/A",
};
const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />

        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}

          {/* {<MovieCard movie1={movies[0]} />} */}
        </div>
      ) : (
        <div className="empty">
          <h2>NO Movies Found!</h2>
        </div>
      )}
    </div>
  );
};

export default App;
