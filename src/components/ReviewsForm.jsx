import axios from "axios";
import { useState } from "react";

function ReviewsForm({ movie_id, refreshReviews }) {
  const apiUrl = `http://localhost:3000/api/movies/${movie_id}/reviews`;

  const initialValueForm = {
    name: "",
    text: "",
    vote: 1,
  };

  const [formData, setFormData] = useState(initialValueForm);

  const setFieldValue = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(apiUrl, formData, {
        header: { "Content-Type": "application/json" },
      })
      .then(() => {
        setFormData(initialValueForm);
        refreshReviews();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Inserisci una recensione</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={setFieldValue}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              Recensione
            </label>
            <textarea
              type="text"
              className="form-control"
              id="text"
              name="text"
              value={formData.text}
              onChange={setFieldValue}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="vote" className="form-label">
              Voto
            </label>
            <input
              type="number"
              className="form-control"
              id="vote"
              name="vote"
              value={formData.vote}
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

export default ReviewsForm;
