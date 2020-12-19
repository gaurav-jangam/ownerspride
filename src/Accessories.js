import React from 'react'
import  { Card,Button,Carousel,CardGroup,CardDeck } from 'react-bootstrap';
import { Link,withRouter } from 'react-router-dom';
import "./Accessories.css";
import Footer from "./components/Footer"

export const Accessories = () => (
  <div>
            
                  <div className="bg2">
                    <h1 class="glowaa"><center>Accessories</center></h1>
                  </div>
                  
<div className="cardback">
<CardDeck data-aos="fade-left">
  <Card>
   <Link to="/led" >

    <Card.Img variant="top" src="images/led.jpg" />
    <Card.Body>
      <Card.Title>
      <Button>LED LIGHTS</Button>
      </Card.Title>
      <Card.Text>

      </Card.Text>
    </Card.Body>
    </Link>
  </Card>
  <Card>
  <Link to="/alloy">

    <Card.Img variant="top" src="images/Alloy.jpg" />
    <Card.Body>
      <Card.Title>
      <Button>ALLOY WHEELS</Button>
      </Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    </Link>
  </Card>
  <Card>
  <Link to="/seat">
    <Card.Img variant="top" src="images/Seat.png" />
    <Card.Body>
      <Card.Title>

      <Button>RALLY SEATS</Button>
      </Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    </Link>
  </Card>

  <Card>
  <Link to="/switch">

     <Card.Img variant="top" src="images/Switch.jpg" />
    <Card.Body>
      <Card.Title>
      <Button>
        SWITCHES
        </Button>

      </Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    </Link>
  </Card>
</CardDeck>
</div>
<div className="cardback">
<CardDeck data-aos="fade-right" >
  <Card>
  <Link to="/bumper">

    <Card.Img variant="top" src="images/Bumper.png" />
    <Card.Body>
      <Card.Title>
      <Button>
        BUMPER
        </Button>
      </Card.Title>
      <Card.Text>
       
      </Card.Text>
    </Card.Body>

    </Link>
  </Card>
  <Card>
  <Link to="/steering">
    <Card.Img variant="top" src="images/Steering.jpg" />
    <Card.Body>
      <Card.Title>
      <Button>
        STEERING WHEELS</Button>
      </Card.Title>
      <Card.Text>
       
      </Card.Text>
    </Card.Body>
    </Link>
  </Card>
  <Card>
  <Link to="/tyre">
    <Card.Img variant="top" src="images/Tyre.jpg" />
    <Card.Body>
      <Card.Title>
      <Button>
        TYRES
        </Button>
      </Card.Title>
      <Card.Text>
       
      </Card.Text>
    </Card.Body>
    </Link>
  </Card>

  <Card>
  <Link to="/snorkel">

    <Card.Img variant="top" src="images/Snor.jpg" />
    <Card.Body>
      <Card.Title>
      <Button>
        SNORKEL KITS
        </Button>
      </Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    </Link>
  </Card>
</CardDeck>
</div>
<div className="cardback">
<CardDeck data-aos="fade-left">
  <Card>
  <Link to="/seat-bealt">
    <Card.Img variant="top" src="images/4Seat.jpg" />
    <Card.Body>
      <Card.Title>

      <Button>
        4 POINT SEAT BEALTS</Button>
      </Card.Title>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
    </Link>
  </Card>
  <Card>
  <Link to="/tow-hook">
    <Card.Img variant="top" src="images/Tow.jpg" />
    <Card.Body>
      <Card.Title>
      <Button>TOW HOOKS
      </Button>
      </Card.Title>
      <Card.Text>
       
      </Card.Text>
    </Card.Body>
</Link>
  </Card>
  <Card>
  <Link to="/RPM">
    <Card.Img variant="top" src="images/RPM.jpeg" />
    <Card.Body>
      <Card.Title>
      <Button>
       RPM METERS
      </Button>
      </Card.Title>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
    </Link>
  </Card>

  <Card>
  <Link to="/mirror">
    <Card.Img variant="top" src="images/Mirror.jpg" />
    <Card.Body>
      <Card.Title>
      <Button>SIDE MIRRORS
      </Button>
      </Card.Title>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
    </Link>
  </Card>
</CardDeck>
</div>
<div className="cardback">
<CardDeck data-aos="fade-right">
  <Card>
  <Link to="/filter">
    <Card.Img variant="top" src="images/Filter.jpeg" />
    <Card.Body>
      <Card.Title>
      <Button>AIR FILTERS
      </Button>
      </Card.Title>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
    </Link>
  </Card>
  <Card>
  <Link to="/metal-decal">
    <Card.Img variant="top" src="images/MD.jpg" />
    <Card.Body>
      <Card.Title>
      <Button>
        METAL DECALS
        </Button>
      </Card.Title>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
</Link>
  </Card>
  <Card>
  <Link to="/muffler">
    <Card.Img variant="top" src="images/Muffler.jpg" />
    <Card.Body>
      <Card.Title>
      <Button>
        MUFFLERS
        </Button>
      </Card.Title>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
    </Link>
  </Card>

  <Card>
  <Link to="/inclinometer">
    <Card.Img variant="top" src="images/Incli.jpg" />
    <Card.Body>
      <Card.Title>
      <Button>
    INCLINOMETERS</Button>
      </Card.Title>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
</Link>
  </Card>
  
</CardDeck>
</div>
<Footer />
</div>

)

