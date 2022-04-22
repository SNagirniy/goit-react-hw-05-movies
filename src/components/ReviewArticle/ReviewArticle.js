import PropTypes from 'prop-types';
import s from './ReviewArticle.module.css';

export const ReviewArticle = ({ name, article, date, rating }) => {
  return (
    <li className={s.item}>
      <h2 className={s.name}>
        {name || 'Name not found'}
        <span className={s.rating}>{rating ? `(${rating}/10)` : ''}</span>
      </h2>
      <p className={s.date}>{date || 'Date not found'}</p>
      <article className={s.text}>{article}</article>
    </li>
  );
};

ReviewArticle.protoTypes = {
  name: PropTypes.string.isRequired,
  article: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
