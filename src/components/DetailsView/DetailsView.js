import { nanoid } from 'nanoid';

export const DetailsView = ({
  poster,
  title,
  year,
  score,
  genres,
  overview,
}) => {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w300${poster}`} alt={title} />
      <h2>
        {title} ({year})
      </h2>
      <p>Score{score}</p>
      <h3>
        Genres:
        {genres &&
          genres.map(genre => {
            const id = nanoid();
            return <span key={id}>{genre.name}</span>;
          })}
      </h3>
      <article>{overview}</article>
    </div>
  );
};
