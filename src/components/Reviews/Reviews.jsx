
import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/API';
import { List, Item,  EmptyReview,Content } from './Reviews.styled';

export default function Reviews() {
  const [searchedReviews, setSearchedReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getMovieReviews(movieId)
      .then(data => setSearchedReviews(data.results))
      .catch(err => err)
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <List>
          {searchedReviews.length > 0 ? (
            searchedReviews.map(({ id, author, content }) => (
              <Item key={id}>
                <h3>{author}</h3>
                <Content>{content}</Content>
              </Item>
            ))
          ) : (
            <EmptyReview> We don't have reviews for this movie </EmptyReview>
          )}
        </List>
      )}
     
      </>
  );
}
