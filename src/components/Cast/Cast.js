import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FilmCast } from 'services/FetchFilms';
import { CastItem } from 'components/CastItem/CastItem';
import s from './Cast.module.css';

const Cast = () => {
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
      {loading && <div className={s.loading}> Loading...</div>}

      {cast.length > 0 ? (
        <ul className={s.cast}>
          {cast.map(({ name, profile_path, cast_id }) => {
            return <CastItem key={cast_id} path={profile_path} name={name} />;
          })}
        </ul>
      ) : (
        <p className={s.message}>We don`t have any cast for this movie.</p>
      )}
    </>
  );
};

export default Cast;
