import React from 'react';
import { directors } from '../data';

const directorCard = () => {
  return (
    directors.map(director => 
    <div>
      <h2>Name: {director.name}</h2>
      <p>Movies:</p>
      <ul>
        {director.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>)
  )
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorCard()}
    </div>
  );
}

export default Directors
