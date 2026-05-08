import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewsCard";
import ReviewsForm from "./ReviewsForm";

function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState([]);

  const fetchMovie = () => {
    axios
      .get(`http://localhost:3000/api/movies/${id}`)
      .then((response) => {
        setMovie(response.data);
        setReviews(response.data.reviews);
      })
      .catch((err) => {
        console.log(err);
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
      {movie?.id && <ReviewsForm movie_id={movie.id} />}
    </>
  );
}

export default MovieDetail;
