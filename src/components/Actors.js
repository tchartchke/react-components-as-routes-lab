import React from 'react';
import { actors } from '../data';

const actorsCard = () => {
  return (
    actors.map(actors => 
    <div>
      <h2>Name: {actors.name}</h2>
      <p>Movies:</p>
      <ul>
        {actors.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>)
  )
}
const Actors = () => {
  return (
    <div>
    <h1>Actors Page</h1>
      {actorsCard()}
    </div>
  );
};

export default Actors;