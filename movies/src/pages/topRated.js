import React from "react";
import { getTopRated } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PageTemplate from '../components/templateMovieListPage';


const TopRatedPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('Latest', getTopRated)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  return (
    <PageTemplate
      title='Top Rated Movies'
      movies={movies}
      action={(movie) => {
        
      }}
    />
  );
};

export default TopRatedPage;