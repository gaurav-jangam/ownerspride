import React from 'react'
import  { Form } from 'react-bootstrap';


function Enqu() {
    return (
        
             <div>
    <Form>
<Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="email" placeholder="Enter Your Name" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter Your Email" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control  placeholder="Message" as="textarea" rows={3} />
  </Form.Group>
</Form>
</div>
        
    )
}

export default Form
