function ReviewCard({ review }) {
  const { name, vote, text } = review;
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h4>
          {name} - {vote}/5
        </h4>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
