import axios from "axios";
import { useState, useEffect } from "react";

import MovieCard from "../components/MovieCard";

function HomePage() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios
      .get("http://localhost:3000/api/movies")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(fetchMovies, []);

  const renderMovieCard = () => {
    return movies.map((movie) => {
      return (
        <div className="col" key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      );
    });
  };

  return <>{renderMovieCard()}</>;
}

export default HomePage;
