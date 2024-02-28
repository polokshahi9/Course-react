import React, { useState } from 'react';
import './Course.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';



const Course = (props) => {
    const {course_name, image, price, title} = props.data;
    const handleClick = props.handleClick;
    
    
   

    return (
       <div className='courses'> 
    <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{course_name}</Card.Title>
         
          <p><small>Course-Title: {title}</small></p>
         
          <p>Course Fee: {price}$</p>
          <div className="d-grid">
          <Button onClick={()=> handleClick(props.data)}  variant="primary">Enrollment</Button>
          </div>
        </Card.Body>
      </Card>
              </div>
               
            

    
   
        
    );
};

export default Course;