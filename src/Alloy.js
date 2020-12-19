import React from 'react'
import  { Card,Button,Carousel,CardGroup,CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Accessories.css";
import Footer from "./components/Footer"


export const Alloy = () => (
  <div>
     <div className="bg2">
                    <h1 class="glow"><center>ALL ALLOY WHEELS</center></h1>
                  </div>
<div className="cardback">
<CardDeck data-aos="fade-left">
  <Card >
   <div>
    <Card.Img variant="top" src="images/a1.jpg" />
    <Card.Body>
      <Card.Title>
      </Card.Title>
      <Card.Text>
        Alloy Wheel
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>
    </Card.Body>
    </div>
  </Card>
  <Card>
      <div>
    <Card.Img variant="top" src="images/a2.jpg" />
    <Card.Body>
      <Card.Title>
      
      </Card.Title>
      <Card.Text>
      Off-Road Steel wheel 15 , 16inch
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>

    </Card.Body>
    </div>
  </Card>
  <Card>
    <div>
    <Card.Img variant="top" src="images/a3.jpg" />
    <Card.Body>
      <Card.Title>

      </Card.Title>
      <Card.Text>
      Lock Embedded Steel Wheel 
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>

    </Card.Body>
    </div>
      </Card>

  <Card>
<div>
     <Card.Img variant="top" src="images/a4.jpeg" />
    <Card.Body>
      <Card.Title>

      </Card.Title>
      <Card.Text>
      Steel Rims For All Vehicles 
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

