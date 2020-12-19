import React from 'react'
import  { Card,Button,Carousel,CardGroup,CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Accessories.css";
import Footer from "./components/Footer"


export const Seat = () => (
  <div>

<div className="bg2">
                    <h1 class="glow"><center>ALL SEATS</center></h1>
                  </div>
<div className="cardback">
<CardDeck data-aos="fade-left">
  <Card >
   <div>
    <Card.Img variant="top" src="images/s1.jpg" />
    <Card.Body>
      <Card.Title>
      </Card.Title>
      <Card.Text>
      Innova Seats Front
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>
    </Card.Body>
    </div>
  </Card>
  <Card>
      <div>
    <Card.Img variant="top" src="images/s2.jpg" />
    <Card.Body>
      <Card.Title>
      
      </Card.Title>
      <Card.Text>
      Swift Seat Front
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>

    </Card.Body>
    </div>
  </Card>
  <Card>
    <div>
    <Card.Img variant="top" src="images/s3.jpeg" />
    <Card.Body>
      <Card.Title>

      </Card.Title>
      <Card.Text>
      Jeep Wrangler JK 2-Door Rear Seat Cover (2007-2018)
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>

    </Card.Body>
    </div>
      </Card>

  <Card>
<div>
     <Card.Img variant="top" src="images/s4.jpg" />
    <Card.Body>
      <Card.Title>

      </Card.Title>
      <Card.Text>
      JTI Striped PVC Racing/Rally Seats (Pair) - Black, Red & White  
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>

    </Card.Body>
    </div>
      </Card>
</CardDeck>
</div>
<div className="cardback">
<CardDeck data-aos="fade-right">
  <Card >
   <div>
    <Card.Img variant="top" src="images/s5.jpg" />
    <Card.Body>
      <Card.Title>
      </Card.Title>
      <Card.Text>
      JTI Fabric Racing/Rally Seats (Pair) - Black 
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>
    </Card.Body>
    </div>
  </Card>
  <Card>
      <div>
    <Card.Img variant="top" src="images/s6.jpg" />
    <Card.Body>
      <Card.Title>
      
      </Card.Title>
      <Card.Text>
      JTI Black and Red Rally Seat
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>

    </Card.Body>
    </div>
  </Card>
  <Card>
    <div>
    <Card.Img variant="top" src="images/s7.jpg" />
    <Card.Body>
      <Card.Title>

      </Card.Title>
      <Card.Text>
      Sparco Rally Seat
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>

    </Card.Body>
    </div>
      </Card>

  
</CardDeck>
</div>
<Footer />
</div>

)

