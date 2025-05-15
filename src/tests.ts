fetch('https://api.themovied.org/3/movie/popular?api_key={906841aea0b8a72698aa6edfc03531dd}&language=en-us&page=1');
// Removed invalid line or integrate it properly into an object if needed
fetch('https://api.themovied.org/3/configuration?api_key={906841aea0b8a72698aa6edfc03531dd}')
  .then(response => response.json())
  .then(data => {
    const imagesConfig = {
      base_url: "http://image.tmdb.org/t/p/",
      secure_base_url: "https://image.tmdb.org/t/p/",
      backdrop_sizes: ["w300", "w780", "w1280", "original"],
      logo_sizes: ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
      poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
      profile_sizes: ["w45", "w185", "h632", "original"],
      still_sizes: ["w92", "w185", "w300", "original"]
    };
    console.log(imagesConfig);
  });
  // Removed invalid line or integrate it properly into an object if needed
  https://image.tmdb.org/t/p/w1280${movie.backdrop_path}
fetch('image.tmb.org/t/p/w1280/5myQbDzw318k9yofUXRJ4UTVgam.jpg')

