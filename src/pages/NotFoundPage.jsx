import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="h-100 d-flex flex-column align-items-center justify-content-center">
      <h2>Pagina non trovata</h2>
      <p className="text-muted my-3">
        Scusa, ma la pagina che stai cercando non esiste
      </p>
      <Link className="btn btn-primary" to="/">
        Torna alla pagina principale
      </Link>
    </div>
  );
}

export default NotFoundPage;
