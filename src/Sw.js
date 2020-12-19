import React from 'react'
import  { Card,Button,Carousel,CardGroup,CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Accessories.css";
import Footer from "./components/Footer"


export const Sw = () => (
  <div>

<div className="bg2">
                    <h1 class="glow"><center>ALL SWITCHES</center></h1>
                  </div>
<div className="cardback">
<CardDeck  data-aos="fade-left">
  <Card >
   <div>
    <Card.Img variant="top" src="images/sw1.jpg" />
    <Card.Body>
      <Card.Title>
      </Card.Title>
      <Card.Text>
      1. Rally On/off Switch 
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>
    </Card.Body>
    </div>
  </Card>
  <Card>
      <div>
    <Card.Img variant="top" src="images/sw2.jpg" />
    <Card.Body>
      <Card.Title>
      
      </Card.Title>
      <Card.Text>
      2. Toggle Bar Switch 
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>

    </Card.Body>
    </div>
  </Card>
  <Card>
    <div>
    <Card.Img variant="top" src="images/sw3.jpg" />
    <Card.Body>
      <Card.Title>

      </Card.Title>
      <Card.Text>
      3. Toggle switch
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>

    </Card.Body>
    </div>
      </Card>

  <Card>
<div>
     <Card.Img variant="top" src="images/Switch.jpg" />
    <Card.Body>
      <Card.Title>

      </Card.Title>
      <Card.Text>
      4. Pilot Switch
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>

    </Card.Body>
    </div>
      </Card>
</CardDeck >
</div>
<div className="cardback">
<CardDeck data-aos="fade-right">
  <Card >
   <div>
    <Card.Img variant="top" src="images/sw4.jpg" />
    <Card.Body>
      <Card.Title>
      </Card.Title>
      <Card.Text>
      5. Pilot Switch
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

