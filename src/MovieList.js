import {React,useState} from 'react';
import MovieCard from './MovieCard';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'; 
import Add from './Add';



const MovieList = ({movies, addMovie}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (  
  <div className="container">


    <div className='movie_card_list'>{movies.map(el=> <MovieCard movie={el}/> )}</div>
    
  <div className='Add'>  <Button variant="success" onClick={handleShow}>Add</Button>
<Add addMovie={addMovie} show={show} handleClose={handleClose}/> </div>

  </div>
)
}
 
export default MovieList    
