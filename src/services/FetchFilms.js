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
