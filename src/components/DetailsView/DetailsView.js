import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import No_poster from '../images/No_poster.png';
import s from './DetailsView.module.css';

export const DetailsView = ({
  poster,
  title,
  year,
  score,
  genres,
  overview,
}) => {
  return (
    <div className={s.tumb}>
      <h2 className={s.title}>
        {title} ({year})
      </h2>
      <p className={s.score}>Score: {score}</p>
      <div>
        {poster ? (
          <img
            className={s.image}
            src={`https://image.tmdb.org/t/p/w300${poster}`}
            alt={title}
          />
        ) : (
          <img className={s.image} src={No_poster} alt={'Poster not found'} />
        )}
      </div>

      <h3 className={s.genres}>
        Genres:
        {genres &&
          genres.map(genre => {
            const id = nanoid();
            return (
              <span className={s.genre} key={id}>
                {genre.name}
              </span>
            );
          })}
      </h3>
      <article className={s.text}>{overview}</article>
    </div>
  );
};

DetailsView.protoTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  genres: PropTypes.array.isRequired,
  overview: PropTypes.string.isRequired,
};
