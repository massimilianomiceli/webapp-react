import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const { id, title, abstract, image } = movie;
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{abstract}</p>
        <Link className="btn btn-primary" to={`/movies/${id}`}>
          See details
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
