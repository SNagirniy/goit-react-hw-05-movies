import No_poster from '../images/No_poster.png';
import PropTypes from 'prop-types';
import s from './CastItem.module.css';

export const CastItem = ({ path, name }) => {
  return (
    <li className={s.item}>
      <div className={s.thumb}>
        {path ? (
          <img
            className={s.image}
            src={`https://image.tmdb.org/t/p/w300${path}`}
            alt={name}
          />
        ) : (
          <img className={s.image} src={No_poster} alt={'Poster not found'} />
        )}
        <h3 className={s.name}>{name}</h3>
      </div>
    </li>
  );
};

CastItem.protoTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
