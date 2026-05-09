import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewsCard";
import ReviewsForm from "../components/ReviewsForm";
import { useGlobal } from "../context/GlobalContext";

function MovieDetail() {
  const redirect = useNavigate();

  const { setIsLoading } = useGlobal();

  const loadingFalse = () => {
    setIsLoading(false);
  };

  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState([]);

  const fetchMovie = () => {
    setIsLoading(true);
    axios
      .get(`http://localhost:3000/api/movies/${id}`)
      .then((response) => {
        setMovie(response.data);
        setReviews(response.data.reviews);
      })
      .catch((err) => {
        console.log(err);
        if (err.status === 404) redirect("/404");
      })
      .finally(() => {
        setTimeout(loadingFalse, 2000);
      });
  };

  useEffect(fetchMovie, []);

  const renderReviewCard = () => {
    return reviews.map((review) => {
      return (
        <div className="col-12" key={review.id}>
          <ReviewCard review={review} />
        </div>
      );
    });
  };

  return (
    <>
      <span>{movie.genre}</span>
      <h1>{movie.title}</h1>
      <h3>
        By {movie.director} - {movie.release_year}
      </h3>
      <p>{movie.abstract}</p>
      <hr></hr>
      <h2>Reviews:</h2>
      {renderReviewCard()}
      {movie?.id && (
        <ReviewsForm movie_id={movie.id} refreshReviews={fetchMovie} />
      )}
    </>
  );
}

export default MovieDetail;
