import { Outlet } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";
import Loader from "../components/Loader";
import { useGlobal } from "../context/GlobalContext";

function DefaultLayout() {
  const { isLoading } = useGlobal();

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
      {isLoading && <Loader />}
    </>
  );
}

export default DefaultLayout;
