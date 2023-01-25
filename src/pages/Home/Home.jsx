import Loader from 'components/Loader/Loader';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { getTrandingMovies } from 'services/API';
import { List, Link } from './Home.styled';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTrandingMovies()
      .then(data => setMovies(data))
      .catch(err => err)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h2>Trending movies today</h2>

      {isLoading ? (
        <Loader />
      ) : (
        <List>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`movies/${id}`}>{title}</Link>
            </li>
          ))}
        </List>
      )}
    </>
  );
}
