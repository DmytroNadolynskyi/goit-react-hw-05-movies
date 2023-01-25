import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/API';
import {
  CastList,
  CastItem,
  Value,
  EmptyCast,
  ImageWrapper,
  NameWrapper,
} from './Cast.styled';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getMovieCast(movieId)
      .then(data => setCast(data.cast))
      .catch(err => err)
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <CastList>
          {cast.length > 0 ? (
            cast.map(({ id, profile_path, name, original_name, character }) => (
              <CastItem key={id}>
                <ImageWrapper>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w200${profile_path}`
                        : 'data:image/png;base64,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'
                    }
                    alt={name}
                    height="150px"
                  />
                </ImageWrapper>
                <NameWrapper>
                  <h3>{original_name}</h3>
                  <p>
                    Character: <Value>{character}</Value>
                  </p>
                </NameWrapper>
              </CastItem>
            ))
          ) : (
            <EmptyCast> We don't have cast for this movie </EmptyCast>
          )}
        </CastList>
      )}
    </>
  );
}
