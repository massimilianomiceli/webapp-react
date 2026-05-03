import axios from "axios";
import { useState, useEffect } from "react";

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

  return <h1>{movies[0]?.id}</h1>;
}

export default HomePage;
