
import { SearchBox } from 'components/SearchBox/SearchBox';

import Loader from 'components/Loader/Loader';
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getMovieByQuery } from 'services/API';
import {
  
  List,
  Link,
  
} from './Movies.styled';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  const query = searchParams.get('query');
  const searchRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: searchRef.current.value });
    // searchRef.current.value = '';
  };

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      getMovieByQuery(searchParams)
        .then(data => {
          setMovies([...data.results]);
        })
        .catch(err => err)
        .finally(() => setIsLoading(false));
    }
  }, [query, searchParams]);

  return (
    <>
      <SearchBox searchRef={searchRef} handleSubmit ={handleSubmit } />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <List>
            {movies.map(({ id, title }) => (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            ))}
          </List>
        </div>
      )}
    </>
  );
}
