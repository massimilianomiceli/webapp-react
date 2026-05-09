import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateMoviePage({ movie_id, refreshReviews }) {
  const navigate = useNavigate();

  const apiUrl = `http://localhost:3000/api/movies`;

  const initialValueForm = {
    title: "",
    director: "",
    genre: "",
    release_year: "",
    abstract: "",
    image: null,
  };

  const [formData, setFormData] = useState(initialValueForm);

  const setFieldValue = (e) => {
    const { name, value } = e.target;
    if (name === "image")
      setFormData({ ...formData, image: e.target.files[0] });
    else setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(apiUrl, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        setFormData(initialValueForm);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Inserisci un nuovo film</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Titolo
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
              onChange={setFieldValue}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="director" className="form-label">
              Direttore
            </label>
            <input
              type="text"
              className="form-control"
              id="director"
              name="director"
              value={formData.director}
              onChange={setFieldValue}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="genre" className="form-label">
              Genere
            </label>
            <input
              type="text"
              className="form-control"
              id="genre"
              name="genre"
              value={formData.genre}
              onChange={setFieldValue}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="release_year" className="form-label">
              Anno di rilascio
            </label>
            <input
              type="number"
              className="form-control"
              id="release_year"
              name="release_year"
              value={formData.release_year}
              onChange={setFieldValue}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="abstract" className="form-label">
              Riassunto
            </label>
            <textarea
              type="text"
              className="form-control"
              id="abstract"
              name="abstract"
              value={formData.abstract}
              onChange={setFieldValue}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Immagine
            </label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              onChange={setFieldValue}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateMoviePage;
