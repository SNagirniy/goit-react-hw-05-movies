import { MovieItem } from 'components/MovieItem/MovieItem';
import PropTypes from 'prop-types';
import s from './MovieList.module.css';

export const MovieList = ({ films, location }) => {
  return (
    <ul className={s.list}>
      {films.map(({ id, title, name }) => {
        const movieTitle = title || name;
        return (
          <MovieItem
            key={id}
            itemId={id}
            title={movieTitle}
            location={location}
          />
        );
      })}
    </ul>
  );
};

MovieList.protoTypes = {
  films: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};
