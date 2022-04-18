import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FilmReviews } from 'services/FetchFilms';

export const Reviews = () => {
  const { itemId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      setLoading(true);
      try {
        const response = await FilmReviews(itemId);
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
      {loading && <div> Loading...</div>}

      {reviews && (
        <div>
          <ul></ul>
          {reviews.map(
            ({ author, id, content, updated_at, author_details }) => {
              return (
                <li key={id}>
                  <h2>
                    {author}({author_details.rating}/10)
                  </h2>
                  <p>{getDate(updated_at)}</p>
                  <article>{content}</article>
                </li>
              );
            }
          )}
        </div>
      )}
    </>
  );
};
