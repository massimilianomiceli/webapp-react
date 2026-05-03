import { Outlet } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";

function DefaultLayout() {
  return (
    <>
      <header>
        <MainNavbar />
      </header>

      <main className="container mt-4">
        <Outlet />
      </main>
    </>
  );
}

export default DefaultLayout;
