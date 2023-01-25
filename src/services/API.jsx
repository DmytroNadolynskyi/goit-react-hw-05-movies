import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '?api_key=9fc56f3259908c41e6bee217e999aa19';

export const getTrandingMovies = async () => {
  const { data } = await axios.get(`/trending/movie/day${API_KEY}`);
  return data.results;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}${API_KEY}`);
  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/credits${API_KEY}`);
  return data;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/reviews${API_KEY}`);
  return data;
};

export const getMovieByQuery = async query => {
  const { data } = await axios.get(`/search/movie${API_KEY}&${query}`);
  return data;
};
