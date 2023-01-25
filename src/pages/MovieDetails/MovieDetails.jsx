

import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/API';
import {
  Title,
  Box,
  MovieInfo,
  List,
  Value,
  Overview,
 Info,
  Link,
  Genres,
  InfoTitle
} from './MovieDetails.styled';
export default function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const { movieId } = useParams();
  const backButton = location.state?.from ?? '/';

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(movieId)
      .then(data => setMovie(data))
      .catch(err => err)
      .finally(() => setIsLoading(false));
  }, [movieId]);
  const { poster_path, title, vote_average, overview, release_date, genres } =
    movie;
  return (
    
    <>
      
      <Link to={backButton}>
        
          Go back
       
      </Link>
      {isLoading ? (
        <Loader />
      ) : (
        <Box>
          <div>
            <img
              width="240px"
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
            />
          </div>
          <MovieInfo>
            <Title>
              {title} ({release_date?.slice(0, 4)})
            </Title>
            <List>
              {vote_average === 0 ? (
                ''
              ) : (
                <li>
                  {' '}
                  User Score:
                  <Value>
                    {vote_average
                      ? Math.fround(vote_average * 10)?.toFixed(0)
                      : ''}
                    %
                  </Value>
                </li>
              )}
              <li>
                {' '}
                Overview:
                <Overview>{overview}</Overview>
              </li>
              <li>
                {' '}
                Genres:
                <Genres>
                  {genres ? genres.map(genre => genre.name).join(', ') : ''}
                </Genres>
              </li>
            </List>
          </MovieInfo>
        </Box>
      )}
       <InfoTitle>Additional information</InfoTitle>
            <Info>
              <Link to={`cast`} state={{ from: location.state?.from }}>
                Cast
              </Link>
              <Link to={`reviews`} state={{ from: location.state?.from }}>
                Reviews
              </Link>
            </Info>
      <Outlet />
    
      </>
  );
}
