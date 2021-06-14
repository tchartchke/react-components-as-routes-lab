import React from 'react';
import { movies } from '../data';

const movieCards = () => {
  return (
    movies.map(movie => 
    <div>
      <h2>Name: {movie.title}</h2>
      <p>Time: {movie.time}</p>
      <p>Genres: 
        <ul>
          {movie.genres.map(genre => <li>{genre}</li>)}
        </ul>
      </p>
    </div>)
  )
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movieCards()}
    </div>
  );
};

export default Movies;