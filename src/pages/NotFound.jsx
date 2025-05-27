const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "5rem" }}> 404 - Not Found</h2>
      <p style={{ fontSize: "2rem" }}>
        The page you are looking for does not exist.
        <br /> Click movies to go back to the homepage.
      </p>
      <img
        style={{ width: "30%", margin: "0 auto" }}
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHM4bmNqbGJwd2FnOTQ4bHhxd3ZpYmdoczA0eXUxdnFlcTBvN3pjcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7QxZfWnBLdGI8/giphy.gif"
        alt=""
      />
    </div>
  );
};

export default NotFound;
