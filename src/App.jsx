import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/Defaultlayout";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies/:id" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
