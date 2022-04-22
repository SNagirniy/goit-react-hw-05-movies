import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FilmReviews } from 'services/FetchFilms';
import { ReviewArticle } from 'components/ReviewArticle/ReviewArticle';
import s from './Reviews.module.css';

const Reviews = () => {
  const { itemId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      setLoading(true);
      try {
        const response = await FilmReviews(itemId);
        if (response.data.results.length === 0) {
          setReviews([]);
          return;
        }
        setReviews(response.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getReviews();
  }, [itemId]);

  const getDate = date => {
    const [dateStr] = new Date(date).toISOString().split('T');
    return dateStr;
  };

  return (
    <>
      {loading && <div className={s.loading}> Loading...</div>}

      {reviews.length > 0 ? (
        <ul className={s.reviews}>
          {reviews.map(
            ({ author, id, content, updated_at, author_details }) => {
              return (
                <ReviewArticle
                  key={id}
                  name={author}
                  article={content}
                  date={getDate(updated_at)}
                  rating={author_details.rating}
                />
              );
            }
          )}
        </ul>
      ) : (
        <p className={s.message}>We don`t have any reviews for this movie.</p>
      )}
    </>
  );
};

export default Reviews;
