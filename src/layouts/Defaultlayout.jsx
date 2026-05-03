import { Outlet } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";

function DefaultLayout() {
  return (
    <>
      <header>
        <MainNavbar />
      </header>

      <main className="container mt-4">
        <div className="row">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default DefaultLayout;
