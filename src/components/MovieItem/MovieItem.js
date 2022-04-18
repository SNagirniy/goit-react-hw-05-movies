import { Link } from 'react-router-dom';

export const MovieItem = ({ title, itemId, location }) => {
  return (
    <li>
      <Link to={`/movies/${itemId}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  );
};
