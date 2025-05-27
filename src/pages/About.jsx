const About = () => {
  return (
    <div
      style={{
        position: "relative",
        padding: "2rem",
        textAlign: "left",
        botton: "0",
        left: "1rem",
        width: "100%",
        maxWidth: "20rem",
      }}
    >
      <h1 hidden>About This Project</h1>
      <h2> What should I watch?</h2>
      <p>
        Welcome to the Movie Explorer! This project is a React-based web
        application that allows users to browse and explore movies using data
        from The Movie Database (TMDB) API.
      </p>
      <h3> Features include:</h3>
      <p>
        <ul
          style={{
            listStyleType: "none",
            textAlign: "left",
            maxWidth: "600px",
            padding: "1rem 0",
          }}
        >
          <li>Search for movies by title.</li>
          <li>
            View detailed information about each movie, including trailers.
          </li>
          <li>Explore genres, ratings, and runtime.</li>
        </ul>
      </p>
      <p>
        This project was built as part of a learning experience to practice
        React, API integration, and responsive design.
      </p>
    </div>
  );
};

export default About;
