import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { ViewFilm } from 'services/FetchFilms';
import { DetailsView } from 'components/DetailsView/DetailsView';

export const MoviesDetailsPage = () => {
  const { itemId } = useParams();
  const location = useLocation();
  const [film, setFilm] = useState([]);
  const [loading, setLoading] = useState(false);

  const getYear = date => {
    return new Date(date).getFullYear();
  };

  useEffect(() => {
    const getFilm = async () => {
      setLoading(true);
      try {
        const response = await ViewFilm(itemId);
        setFilm(response.data);
      } catch (error) {
        console.log(error);
        setFilm([]);
      } finally {
        setLoading(false);
      }
    };
    getFilm();
  }, [itemId]);

  return (
    <>
      {loading && <div> Loading...</div>}
      <main>
        <Link to={location?.state?.from ?? '/'}>Go back</Link>
        {film && (
          <DetailsView
            poster={film.poster_path}
            title={film.original_title}
            year={getYear(film.release_date)}
            score={film.vote_average}
            genres={film.genres}
            overview={film.overview}
          />
        )}
        <div>
          <Link
            to={`/movies/${itemId}/cast`}
            state={{ from: { ...location.state.from } }}
          >
            Cast
          </Link>
          <Link
            to={`/movies/${itemId}/reviews`}
            state={{ from: { ...location.state.from } }}
          >
            Reviews
          </Link>
          <Outlet />
        </div>
      </main>
    </>
  );
};
