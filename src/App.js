import React, {useState} from 'react';
import './App.css';
import MovieList from './MovieList';
import Search from './Search';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [keysearch, setKeysearch] = useState("");
  const [newRate, setNewRate] = useState(1);
  const [movies,setMovies]=useState([
    {
      title: "The Godfather",
      img: "./thegodfather.jpg",
      description: "The Godfather 'Don' Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his daughter's wedding.",
      trailer: "https://www.thegodfathersofficial.com/",
      rating: 5,
      id:1
    },
    {
      title: "The Shawshank",
      img: "./theshawshank.jpg",
      description: "The Shawshank Redemption has become a classic film - it's even IMDb's top-rated movie of all time - but did you know it almost had an entirely different cast behind those legendary bars?",
      trailer: "https://shawshanktrail.com/",
      rating: 4,
      id:2
    },
    {
      title: "Braveheart",
      img: "./braveheart.jpg",
      description: "William Wallace is a Scottish rebel who leads an uprising against the cruel English ruler Edward the Longshanks, who wishes to inherit the crown of Scotland for himself. ",
      trailer: "https://www.paramount.com/movies/braveheart",
      rating: 3,
      id:3
     }
 
  ]);
  
  const search=(text)=>{
  setKeysearch(text) 
  }
  const setRate=(rate)=>{
    setNewRate(rate)
  }
  const addMovie = (movie) => {
    setMovies(movies.concat(movie))
  }
  return (
    <div className='App'>
      <h1 className='title'>The Best Movies of All Time</h1>
         
     <div className='Search'> <Search search={search} setRate={setRate} newRate={newRate}/> </div>
  
         <MovieList addMovie={addMovie} movies={movies.filter(el=> (el.rating >= newRate) && el.title.toLowerCase().includes(keysearch.toLowerCase().trim()))}/>

    
    
     
    </div>
  );
}

export default App;
