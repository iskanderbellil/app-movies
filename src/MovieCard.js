import React from 'react';
import './App.css';
import StarRatingComponent from 'react-star-rating-component';

const MovieCard = ({movie}) => {

  return( 
  <div className='container1'>
<div class="movie_card" id="bright">
  <div class="info_section">
    <div class="movie_header">
      <img class="film-image" src={movie.img} alt="imgg"/>
      <h1>{movie.title}</h1>
    </div>
    <div class="movie_desc">
      <p class="text">
      {movie.description} 
      </p>
      <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rating}
        />
    </div>

    </div>
  </div>



  

  </div> 
  )}
;
export default MovieCard;



// ///////////////////////