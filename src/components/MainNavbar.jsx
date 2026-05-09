import { Link, NavLink } from "react-router-dom";

function MainNavbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Bool Movies
        </Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/movies/create" className="nav-link">
              Aggiungi un film
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNavbar;
