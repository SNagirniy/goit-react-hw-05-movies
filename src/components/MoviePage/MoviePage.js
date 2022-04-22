import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { SearchFilm } from 'services/FetchFilms';
import { MovieList } from 'components/MovieList/MovieList';
import { toast } from 'react-toastify';
import s from './MoviePage.module.css';

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
    if (query === '') {
      setSearchParams('');
      setFilms(null);
      return toast('Please, enter movie name!', {
        position: 'top-center',
      });
    }
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
          setFilms(null);
          return toast(`Movie ${query} not found!`, {
            position: 'top-center',
          });
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
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          onChange={ChangeQuery}
          type="text"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search films"
        ></input>
        <button className={s.button} type="submit"></button>
      </form>
      {loading && <div className={s.loading}>Loading...</div>}
      {films && <MovieList films={films} location={location} />}
    </>
  );
};

export default MoviePage;
