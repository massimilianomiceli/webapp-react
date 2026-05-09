import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const { id, title, abstract, image } = movie;
  return (
    <div className="card mb-3 h-100">
      <img className="card-img" src={image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{abstract}</p>
        <Link className="btn btn-primary" to={`/movies/${id}`}>
          Scopri dettagli
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
