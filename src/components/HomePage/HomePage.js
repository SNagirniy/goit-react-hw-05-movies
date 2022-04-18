import { useState, useEffect } from 'react';
import { TrendingFilms } from 'services/FetchFilms';
import { MovieList } from 'components/MovieList/MovieList';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getFilms = async () => {
      setLoading(true);
      try {
        const response = await TrendingFilms();
        setFilms(prevFilms => [...prevFilms, ...response.data.results]);
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
      <MovieList films={films} location={location} />
    </>
  );
};

export default HomePage;
