

const MovieInfo = ({ title, score, desc }) => {
  return (
    <div className='flex flex-col w-full justify-end gap-4 max-w-2xl'>
      <div className='flex w-full justify-between text-2xl'>
        <h1 className='text-white'>
          <span className='font-bold text-shadow-lg'>{title} </span>
          <span className='text-black h-max bg-white pr-1'>⭐{score}</span>
        </h1>

      </div>
      <p className='text-white'>{desc}</p>
    </div>
  )
}

export default MovieInfo