import { Link } from 'react-router-dom';

export const MovieItem = ({ title, itemId }) => {
  return (
    <li>
      <Link to={`/movies/${itemId}`}>{title}</Link>
    </li>
  );
};
