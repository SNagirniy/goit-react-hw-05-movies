import { useState, useEffect } from 'react';
import { TrendingFilms } from 'services/FetchFilms';
import { MovieList } from 'components/MovieList/MovieList';

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getFilms = async () => {
      setLoading(true);
      try {
        const response = await TrendingFilms();
        if (response.data.results.length === 0) {
          return;
        }
        setFilms([...response.data.results]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getFilms();
  }, []);

  return (
    <>
      {loading && <div>Loading...</div>}
      <MovieList films={films} />
    </>
  );
};

export default HomePage;
