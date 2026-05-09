import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/Defaultlayout";
import HomePage from "./pages/HomePage";
import MovieDetail from "./pages/MovieDetail";
import CreateMoviePage from "./pages/CreateMoviePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies/create" element={<CreateMoviePage />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
