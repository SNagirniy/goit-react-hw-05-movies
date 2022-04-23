import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import { ViewFilm } from 'services/FetchFilms';
import { DetailsView } from 'components/DetailsView/DetailsView';
import s from './MovieDetailsPage.module.css';

const MoviesDetailsPage = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(false);

  const onBack = () => {
    navigate(-1);
  };

  const getYear = date => {
    return new Date(date).getFullYear();
  };

  useEffect(() => {
    const getFilm = async () => {
      setLoading(true);
      try {
        const response = await ViewFilm(itemId);
        if (response.data.length === 0) {
          return;
        }
        setFilm(response.data);
      } catch (error) {
        console.log(error);
        setFilm(null);
      } finally {
        setLoading(false);
      }
    };
    getFilm();
  }, [itemId]);

  return (
    <>
      {loading && <div className={s.loading}> Loading...</div>}
      <button className={s.back_btn} onClick={onBack}>
        Go back
      </button>
      <main className={s.main}>
        {film ? (
          <DetailsView
            poster={film.poster_path}
            title={film.original_title}
            year={getYear(film.release_date)}
            score={film.vote_average}
            genres={film.genres}
            overview={film.overview}
          />
        ) : (
          <p className={s.message}>Film not found</p>
        )}
        <div className={s.detailsContainer}>
          <Link className={s.details_link} to={`/movies/${itemId}/cast`}>
            Cast
          </Link>
          <Link className={s.details_link} to={`/movies/${itemId}/reviews`}>
            Reviews
          </Link>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default MoviesDetailsPage;
