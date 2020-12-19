import React from 'react'
import  { Card,Button,Carousel,CardGroup,CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Accessories.css";
import Footer from "./components/Footer"


export const Muffler = () => (
  <div>
    <div className="bg2">
                    <h1 class="glow"><center>ALL MUFFLERS</center></h1>
                  </div>
<div className="cardback">
<CardDeck  data-aos="fade-left">
  <Card >
   <div>
    <Card.Img variant="top" src="images/mf1.jpg" />
    <Card.Body>
      <Card.Title>
      </Card.Title>
      <Card.Text>
        1. Muffler
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>
    </Card.Body>
    </div>
  </Card>
  <Card>
      <div>
    <Card.Img variant="top" src="images/mf2.png" />
    <Card.Body>
      <Card.Title>
      
      </Card.Title>
      <Card.Text>
      2. AutoStark Car Exhaust Tube in Tube Silencer Muffler Tip For Maruti Gypsy King Car Silencer (Exhaust Silencer)
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>

    </Card.Body>
    </div>
  </Card>
  <Card>
    <div>
    <Card.Img variant="top" src="images/mf3.jpg" />
    <Card.Body>
      <Card.Title>

      </Card.Title>
      <Card.Text>
      3. HKS HKS-3203-EX023 3203-EX023 Universal Stainless Hi-Power Muffler
      </Card.Text>
      <Button>Order!<i class="fa fa-first-order" aria-hidden="true"></i></Button>

    </Card.Body>
    </div>
      </Card>

  <Card>
<div>
     <Card.Img variant="top" src="images/mf4.jpg" />
    <Card.Body>
      <Card.Title>

      </Card.Title>
      <Card.Text>
      4. Supremechoice Car A1 Quality Duel Double Round Pipe Car Exhaust Silencer Tipe Chrome for Maruti Gypsy King
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

