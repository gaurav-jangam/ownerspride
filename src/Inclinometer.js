import React from 'react'
import  { Card,Button,Carousel,CardGroup,CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Accessories.css";
import Footer from "./components/Footer"


export const Inclinometer = () => (
  <div>
    <div className="bg2">
                    <h1 class="glow"><center>ALL INCLINOMETERS</center></h1>
                  </div>
<div className="cardback">
<CardDeck  data-aos="fade-left">
  <Card >
   <div>
    <Card.Img variant="top" src="images/in1.png" />
    <Card.Body>
      <Card.Title>
      </Card.Title>
      <Card.Text>
        1. Alcoa Prime Car Angle Tilt 12V 2-barreled Inclinometer Balancer Backlight Slope Meter Gauge&
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>
    </Card.Body>
    </div>
  </Card>
  <Card>
      <div>
    <Card.Img variant="top" src="images/in2.jpg" />
    <Card.Body>
      <Card.Title>
      
      </Card.Title>
      <Card.Text>
     2. Car Angle Tilt Two-barreled Inclinometer Balancer Backlight Slope Meter Gauge
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>

    </Card.Body>
    </div>
  </Card>
  <Card>
    <div>
    <Card.Img variant="top" src="images/in3.jpg" />
    <Card.Body>
      <Card.Title>

      </Card.Title>
      <Card.Text>
      3. Car Vehicle Inclinometer Angle Slope Tilt Indicator Level
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>

    </Card.Body>
    </div>
      </Card>

  <Card>
<div>
     <Card.Img variant="top" src="images/in4.jpg" />
    <Card.Body>
      <Card.Title>

      </Card.Title>
      <Card.Text>
    4. Rugged Ridge 13309.02 Roll Pitch Indicator Clinometer with Light
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>

    </Card.Body>
    </div>
      </Card>
</CardDeck>
</div>
<div className="cardback">
<CardDeck>
  <Card >
   <div>
    <Card.Img variant="top" src="images/in5.png" />
    <Card.Body>
      <Card.Title>
      </Card.Title>
      <Card.Text>
      5. Rampage 791006 jeep pitch and roll clinometer with 4 dr jk unlimited graphic and compass
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

