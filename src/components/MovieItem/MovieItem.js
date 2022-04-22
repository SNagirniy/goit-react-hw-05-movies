import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieItem.module.css';

export const MovieItem = ({ title, itemId, location }) => {
  return (
    <li className={s.item}>
      <Link
        className={s.item_link}
        to={`/movies/${itemId}`}
        state={{ from: location }}
      >
        {title}
      </Link>
    </li>
  );
};

MovieItem.protoTypes = {
  title: PropTypes.string.isRequired,
  itemId: PropTypes.number.isRequired,
  location: PropTypes.object.isRequired,
};
