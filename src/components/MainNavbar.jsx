import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/dashboard">
          Bool Movies
        </Link>
      </div>
    </nav>
  );
}

export default MainNavbar;
