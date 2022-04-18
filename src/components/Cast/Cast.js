import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FilmCast } from 'services/FetchFilms';
import No_poster from '../images/No_poster.png';

export const Cast = () => {
  const { itemId } = useParams();
  const [cast, setCast] = useState([]);
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

      {cast.length > 0 ? (
        <div>
          {cast.map(({ name, profile_path, id }) => {
            return (
              <div key={id}>
                {profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                    alt={name}
                  />
                ) : (
                  <img src={No_poster} alt={'Poster not found'} />
                )}
                <h2>{name}</h2>
              </div>
            );
          })}
        </div>
      ) : (
        <p>We don`t have any cast for this movie.</p>
      )}
    </>
  );
};
