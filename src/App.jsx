import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/Defaultlayout";
import HomePage from "./components/HomePage";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
