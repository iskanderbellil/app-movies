import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Modal, Form,Row, Col, FloatingLabel} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';


const Add = ({show,handleClose, newRate, setRate, addMovie}) => {
  const onStarClick=(nextValue, prevValue, name) => {
    setNewMovie({...newMovie,rating:nextValue})
  };
  const [newMovie,setNewMovie]=useState({
    title:"",
    rating:"1",
    description:"",
    img:""
  })
  const handleChange = (e) =>{
    setNewMovie({...newMovie,[e.target.name]:e.target.value})

  }
  return <div>
 <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" placeholder="Enter title" onChange={handleChange} name="title" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Image url</Form.Label>
      <Form.Control type="password" placeholder="Image url" onChange={handleChange} name="img"/>
    </Form.Group>
  </Row>
  <StarRatingComponent 
          name="rating" 
          starCount={5}
          onChange={handleChange} 
          value={newMovie.rating}
          onStarClick={onStarClick}
        />
  <>
    <FloatingLabel controlId="floatingTextarea2" > Description
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      onChange={handleChange}
      name="description"
      style={{ height: '100px' }}
    />
  </FloatingLabel>
</>
 

</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {addMovie(newMovie) ; handleClose()} }>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      
  
  </div>;
};

export default Add;
