import React from 'react'
import  { Card,Button,Carousel,CardGroup,CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Accessories.css";
import Footer from "./components/Footer"


export const Tyre = () => (
  <div>
    <div className="bg2">
                    <h1 class="glow"><center>ALL TYRES</center></h1>
                  </div>
<div className="cardback">
<CardDeck  data-aos="fade-left">
  <Card >
   <div>
    <Card.Img variant="top" src="images/t1.jpg" />
    <Card.Body>
      <Card.Title>
      </Card.Title>
      <Card.Text>
      1. All Types Of AT Tyres.jpg
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>
    </Card.Body>
    </div>
  </Card>
  <Card>
      <div>
    <Card.Img variant="top" src="images/t2.jpg" />
    <Card.Body>
      <Card.Title>
      
      </Card.Title>
      <Card.Text>
      2. All Types Of MT Tyres
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>

    </Card.Body>
    </div>
  </Card>
  <Card>
    <div>
    <Card.Img variant="top" src="images/t3.jpg" />
    <Card.Body>
      <Card.Title>

      </Card.Title>
      <Card.Text>
      3. Maxxis Bravo AT-771 31x10.5R15
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>

    </Card.Body>
    </div>
      </Card>

  <Card>
<div>
     <Card.Img variant="top" src="images/Tyre.jpg" />
    <Card.Body>
      <Card.Title>

      </Card.Title>
      <Card.Text>
      4. AXIAL Maxxis Trepador AXIC2002 R35 2.2 Tyre 
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

