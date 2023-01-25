

import { ReactComponent as Icon } from 'icons/zoom.svg';

import Loader from 'components/Loader/Loader';
import React, { useEffect, useRef, useState } from 'react';
import {  useSearchParams,useLocation } from 'react-router-dom';
import { getMovieByQuery } from 'services/API';
import {
  NavBox,
  List,
  Link,
  SearchbarCss,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Movies.styled';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [foundMovies, setFoundMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  const query = searchParams.get('query');
  const searchRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: searchRef.current.value });
    searchRef.current.value = '';
  };

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      getMovieByQuery(searchParams)
        .then(data => {
          setFoundMovies([...data.results]);
          
        })
        .catch(err => err)
        .finally(() => setIsLoading(false));
    }
  }, [query, searchParams]);

  return (
    
    <>
      <NavBox>
        <SearchbarCss>
        <SearchForm  onSubmit={handleSubmit}>
          <SearchFormButton type="submit">
              <Icon />
              <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>
          <SearchFormInput
            ref={searchRef}
            type="text"
            placeholder="Search movies"
            required
          />
          </SearchForm>
          </SearchbarCss>
      </NavBox>
      {isLoading ? (
        <Loader />
      ) : (
        <div >
          <List>
            {foundMovies.map(({id,title}) => (
              <li key={id}>
                <Link
                  to={`${id}`}
                  state={{ from: location }}
                  
                >
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
