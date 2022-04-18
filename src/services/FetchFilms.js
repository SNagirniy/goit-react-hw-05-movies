import axios from 'axios';

const API_KEY = '19261be26ee50f4d2c275bad83bad0b4';

export const TrendingFilms = async () => {
  return await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  );
};
export const ViewFilm = async id => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
};

export const FilmCast = async id => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
};

export const FilmReviews = async id => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
};

export const SearchFilm = async key_word => {
  return await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${key_word}`
  );
};
