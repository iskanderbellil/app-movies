import React, {useState} from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './App.css'

const Search = ({search,setRate,newRate}) => {
const [rating, setRating] = useState(1);
const onStarClick=(nextValue, prevValue, name) => {
    setRate(nextValue);
  }
 
  return (
  
  <div className="input">
    <input  type="text" placeholder="Search a movie" onChange={(e)=>search(e.target.value)} />
    <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={newRate}
          onStarClick={onStarClick}
        />
  </div>
  );
};

export default Search;
