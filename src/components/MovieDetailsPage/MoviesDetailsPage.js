import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { ViewFilm } from 'services/FetchFilms';

export const MoviesDetailsPage = () => {
  const { itemId } = useParams();
  const [film, setFilm] = useState(null);
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
      } finally {
        setLoading(false);
      }
    };
    getFilm();
  }, [itemId]);

  return (
    <>
      {loading && <div> Loading...</div>}

      {film && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
            alt={film.original_title}
          />
          <h1>
            {film.title} ({getYear(film.release_date)})
          </h1>
          <p>User score: {film.vote_average}</p>
          <h2>
            Genres:
            {film.genres.map(genre => {
              const id = nanoid();
              return <span key={id}>{genre.name} </span>;
            })}
          </h2>
          <h2>Overview</h2>
          <p>{film.overview}</p>
        </div>
      )}
    </>
  );
};
