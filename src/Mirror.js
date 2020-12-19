import React from 'react'
import  { Card,Button,Carousel,CardGroup,CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Accessories.css";
import Footer from "./components/Footer"


export const Mirror = () => (
  <div>
    <div className="bg2">
                    <h1 class="glow"><center>ALL SIDE MRRORS</center></h1>
                  </div>
<div className="cardback">
<CardDeck  data-aos="fade-left">
  <Card >
   <div>
    <Card.Img variant="top" src="images/m1.jpg" />
    <Card.Body>
      <Card.Title>
      </Card.Title>
      <Card.Text>
        1. Maruti Gypsy Side Mirror Set
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>
    </Card.Body>
    </div>
  </Card>
  <Card>
      <div>
    <Card.Img variant="top" src="images/m2.jpg" />
    <Card.Body>
      <Card.Title>
      
      </Card.Title>
      <Card.Text>
      2. Modify Side Mirrors
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>

    </Card.Body>
    </div>
  </Card>
  <Card>
    <div>
    <Card.Img variant="top" src="images/m3.jpg" />
    <Card.Body>
      <Card.Title>

      </Card.Title>
      <Card.Text>
      3. Modify Side Mirrors
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>

    </Card.Body>
    </div>
      </Card>

  <Card>
<div>
     <Card.Img variant="top" src="images/m4.jpg" />
    <Card.Body>
      <Card.Title>

      </Card.Title>
      <Card.Text>
      4. Jeep Wrangler Side Mirror For Mahindra Thar, Maruti Gypsy
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>

    </Card.Body>
    </div>
      </Card>
</CardDeck>
</div>
<div className="cardback">
<CardDeck  data-aos="fade-right">
  <Card >
   <div>
    <Card.Img variant="top" src="images/m1.jpg" />
    <Card.Body>
      <Card.Title>
      </Card.Title>
      <Card.Text>
        5. Modify Side Mirrors
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>
    </Card.Body>
    </div>
  </Card>
  <Card>
      <div>
    <Card.Img variant="top" src="images/m6.jpg" />
    <Card.Body>
      <Card.Title>
      
      </Card.Title>
      <Card.Text>
      6. Jeep Side Mirrors
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

