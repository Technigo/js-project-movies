import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const AboutPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setMovieDetails(data)) // save the movie details to the state variable
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [setMovieDetails]);

  const rounded = Math.round(movieDetails.vote_average * 10) / 10;
  const fixed = rounded.toFixed(1);

  const imgBackground = `https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`;
  const posterImg = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white pt-30px md:pt-0"
      style={{ backgroundImage: `url(${imgBackground})` }}
    >
      <img src={imgBackground} alt={movieDetails.title} className="sr-only" />
      {/*hidden img to apply alt for screen reader*/}

      {/* Overlay, for darkening background) */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="z-10 flex flex-col justify-end min-h-screen">
        <div className="z-10 flex flex-col-reverse md:flex-row items-center md:items-start gap-8 px-6 md:px-16 py-12 max-w-screen-xl mx-auto">
          {/* Poster Image */}
          <div className="w-64 flex-shrink-0 border-4 border-white rounded-lg overflow-hidden">
            <img
              src={posterImg}
              alt={movieDetails.title}
              className="w-full h-auto"
            />
          </div>

          {/* Movie Info */}
          <div className="md:order-1 max-w-xl text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">{movieDetails.title}</h2>

            {/* Rating */}
            <div className="inline-flex items-center gap-3 bg-white text-black font-bold px-3 py-1 rounded mb-4">
              ⋆ {fixed}
            </div>

            {/* Overview */}
            <p className="text-lg leading-relaxed">{movieDetails.overview}</p>
          </div>
        </div>

        {/* Back Link */}
        <div className="absolute top-4 left-4 z-20">
          <Link
            to="/"
            className="text-white no-underline text-lg font-medium flex flex-row outline-offset-6 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              className="w-7 h-7 mr-2 flex place-self-center"
            >
              <path
                d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z"
                fill="#fff"
                fill-rule="evenodd"
              ></path>
            </svg>
            Movies
          </Link>
        </div>
      </div>
    </div>
  );
};
