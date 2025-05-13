const Card = ({ movie }) => {
  return (
    <>
      <p>{movie.title}</p>
      <img src={movie.poster_path} alt="" /> 
      <p>{movie.release_data}</p>
    
    </>
  )
}
export default Card