import { Link } from "react-router";


const NotFoundPage = () => {
  return (
    <div className="not-found" aria-labelledby="notfound-heading">
      <h1 id="notfound-heading">404 - Page Not Found</h1>
      <p role="alert">Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}
export default NotFoundPage