import './Card.css';

const Card = ({ movieTitle }) => {
  return (
    <div className="card">
      <h2>{movieTitle}</h2>
      <p>Movie description goes here.</p>
    </div>
  );

}