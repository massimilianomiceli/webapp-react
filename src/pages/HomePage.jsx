import axios from "axios";
import { useState, useEffect } from "react";
import { useGlobal } from "../context/GlobalContext";
import MovieCard from "../components/MovieCard";

function HomePage() {
  const { setIsLoading } = useGlobal();

  const loadingFalse = () => {
    setIsLoading(false);
  };

  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    setIsLoading(true);
    axios
      .get("http://localhost:3000/api/movies")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setTimeout(loadingFalse, 2000);
      });
  };

  useEffect(fetchMovies, []);

  const renderMovieCard = () => {
    return movies.map((movie) => {
      return (
        <div className="col-3 mb-3" key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      );
    });
  };

  return <>{renderMovieCard()}</>;
}

export default HomePage;
