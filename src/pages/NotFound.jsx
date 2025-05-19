import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1 className="flex justify-center text-2xl">Error 404: Not Found.</h1>
      <Link to="/" className="flex justify-center text-2xl text-blue-700 underline">Back to Home</Link>
    </div>
  )
}

export default NotFound