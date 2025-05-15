import './Card.css';

const Card = ({ movie }) => {
  return (
    <div className="card">
      <h2>{movie}</h2>
    </div>
  );

}

export default Card;