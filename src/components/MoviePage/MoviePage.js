import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { SearchFilm } from 'services/FetchFilms';
import { MovieList } from 'components/MovieList/MovieList';

const MoviePage = () => {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const ChangeQuery = e => {
    setQuery(e.currentTarget.value.toLowerCase().trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
    setQuery('');
  };

  useEffect(() => {
    const keyWord = searchParams.get('query');
    if (location.search === '') {
      return;
    }
    const getFilms = async () => {
      setLoading(true);
      try {
        const response = await SearchFilm(keyWord);
        if (response.data.results.length === 0) {
          setFilms([]);
          return;
        }
        setFilms(response.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getFilms();
  }, [searchParams, setSearchParams, location.search]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={ChangeQuery}
          type="text"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search films"
        ></input>
        <button type="submit">Search</button>
      </form>
      {loading && <div>Loading...</div>}
      {films && <MovieList films={films} location={location} />}
    </>
  );
};

export default MoviePage;
