import { MovieItem } from 'components/MovieItem/MovieItem';
export const MovieList = ({ films }) => {
  return (
    <ul>
      {films.map(({ id, title, name }) => {
        const movieTitle = title || name;
        return <MovieItem key={id} itemId={id} title={movieTitle} />;
      })}
    </ul>
  );
};
