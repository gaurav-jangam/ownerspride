import React from 'react'
import  {  Form, Card,Button,Carousel,Row,Col,CardGroup,CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Jeep.css";
import Footer from "./components/Footer"
import 'font-awesome/css/font-awesome.min.css';



export const Jeep = () => (
  <div>
       <Card className="bg-dark text-white">
  <Card.Img src="images/jeep3.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title><h3>Customize Your Own Jeep</h3></Card.Title>
    <Card.Text>
    Owners Pride is a company with a team which has years of experience in automotive industry. We believe in giving new life to your machine. Having said that we are into customization of Jeeps.
    </Card.Text>
    <Card.Text> </Card.Text>
  </Card.ImgOverlay>
</Card>

<Row>
    <Col>
    <div className="cvr">
    <center><h2>General Inquiries</h2><br/>
    <h3><i class="fa fa-address-book" aria-hidden="true">Prakash Suryawanshi</i></h3>
    <h3><i class="fa fa-phone" aria-hidden="true">98220 00036</i></h3><br/>
   <a href="https://wa.link/tpho8l"><i class="fa fa-whatsapp fa-5x" aria-hidden="true"></i></a></center>
​
    </div>
    </Col>
    <Col>
    <div className="cv">
    <Form>
<Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Name*</Form.Label>
    <Form.Control type="email" placeholder="Enter Your Name" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Label>Email address*</Form.Label>
    <Form.Control type="email" placeholder="Enter Your Email" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Comment or Message *</Form.Label>
    <Form.Control  placeholder="Message" as="textarea" rows={5} />
  </Form.Group><center>
  <Button variant="primary" type="submit">
    Submit
  </Button></center>
</Form>
</div>    
    </Col>
  </Row>
                
<Footer />

</div>

)

