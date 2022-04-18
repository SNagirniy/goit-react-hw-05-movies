import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FilmCast } from 'services/FetchFilms';

export const Cast = () => {
  const { itemId } = useParams();
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCast = async () => {
      setLoading(true);
      try {
        const response = await FilmCast(itemId);
        setCast(response.data.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getCast();
  }, [itemId]);

  return (
    <>
      {loading && <div> Loading...</div>}

      {cast && (
        <div>
          {cast.map(({ name, profile_path, id }) => {
            return (
              <div key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                  alt={name}
                />
                <h2>{name}</h2>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
