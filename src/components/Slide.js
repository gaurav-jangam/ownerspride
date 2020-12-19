import React from 'react'
import  {Jumbotron,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
    Card, CardDeck
  } from 'react-bootstrap';
  import "./Slide.css"


function Slide() {


 
    return (
        <div className="pab">
                <div data-aos="fade-up">
            <Jumbotron>
                  <div className="ojb">
              <h2 className="ow">OUR JEEPS  </h2>
                <p className="jp">
                ---------------------
                </p>
                </div>
                <div data-aos="fade-up">
        <div className="owc"> 
        
        <CardDeck>
  <Card >
   <div>
    <Card.Img variant="top" src="images/j1.png" />
    <Card.Body>
      <Card.Title>
      </Card.Title>
      <Card.Text>
      </Card.Text>
      <Link to="/payment">
      </Link>
    </Card.Body>
    </div>
  </Card>
  <Card>
      <div>
    <Card.Img variant="top" src="images/j3.png" />
    <Card.Body>
      <Card.Title>
      
      </Card.Title>
      <Card.Text>
      </Card.Text>

    </Card.Body>
    </div>
  </Card>
  <Card>
    <div>
    <Card.Img variant="top" src="images/j2.png" />
    <Card.Body>
      <Card.Title>

      </Card.Title>
      <Card.Text>
      </Card.Text>

    </Card.Body>
    </div>
      </Card>

  <Card>
<div>
     <Card.Img variant="top" src="images/j4.png" />
    <Card.Body>
      <Card.Title>

      </Card.Title>
      <Card.Text>
      </Card.Text>

    </Card.Body>
    </div>
      </Card>
</CardDeck>
</div>

        </div>
            <center>
            <Link to="/accessories">
                <div className="owb"><Button >Our Works</Button></div>
            </Link>
                </center>
            </Jumbotron>
        </div>
        </div>
    )
}


export default Slide

