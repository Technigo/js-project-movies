import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Card = ({ movie }) => {
  const [imgSize, setImgSize] = useState("w780");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) setImgSize("w780");
      else if (width >= 768) setImgSize("w500");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let imgPoster = `https://image.tmdb.org/t/p/${imgSize}${movie.poster_path}`;

  return (
    <Link className="-outline-offset-4 outline-6" to={`/movies/${movie.id}`}>
      <figure
        className="w-full h-[580px] sm:h-[780px] bg-cover bg-center overflow-hidden shadow-lg flex justify-start items-end"
        style={{ backgroundImage: `url(${imgPoster})` }}
      >
        <img src={imgPoster} alt={movie.title} className="sr-only" />
        {/*hidden img to apply alt for screen reader*/}

        <div className=" bg-black bg-opacity-60 text-white p-2 w-full">
          <p className="text-[24px]">{movie.title}</p>
          <p className="">{movie.release_date}</p>
        </div>
      </figure>
    </Link>
  );
};
