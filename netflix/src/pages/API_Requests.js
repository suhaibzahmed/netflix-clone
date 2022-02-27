const apikey = "4ead775cc4cb369acc59bd25925843bf";

export const requests = {
  fetchTrending: `/trending/all/day?api_key=${apikey}`,
  fetchNetflixOrig: `/discover/tv?api_key=${apikey}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${apikey}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${apikey}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${apikey}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${apikey}&with_genres=27`,
  fetchRomanticMovies: `/discover/movie?api_key=${apikey}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${apikey}&with_genres=99`,
};
