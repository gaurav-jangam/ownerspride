import React from 'react'
import  {Tab, Tabs} from 'react-bootstrap';
import {
  Card, CardDeck
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'  
import Footer from "./components/Footer"
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Home.css"
import Slide from "./components/Slide"


AOS.init()

export const Home = () => (
  
  <div>
    <div data-aos="zoom-in-up">
      <div>
      <Carousel >
      <Carousel.Item interval={1000}>
      
      <div id="foglayer_01" class="fog">
        <img 
          src="images/bg1.jpg"
          alt="cardback slide"
        />
        <div class="black-overlay"></div></div>
      <Carousel.Caption>
      <div className="ss">
      <h3 className="sh1">We designed your Jeep For Best</h3>
      <p>Owners Pride is a company with a team which has years of experience in automotive industry. We believe in giving new life to your machine. Having said that we are into customization of Jeeps.</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item >

  <Carousel.Item interval={1500}>
  <div id="foglayer_01" class="fog">
    <img
      src="images/j5.jpg"
      alt="Third slide"
    /></div>
    <Carousel.Caption>
      <div className="ss">
      <h3 className="sh1">We designed your Jeep For Better</h3>
      <p>Owners Pride is a company with a team which has years of experience in automotive industry. We believe in giving new life to your machine. Having said that we are into customization of Jeeps.</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
  <div id="foglayer_01" class="fog">
    <img
      src="images/j6.jpg"
      alt="Third slide"
    /></div>
    <Carousel.Caption>
    <div className="ss">

      <h3 className="sh1">We designed your Jeep Strong</h3>
      <p>Owners Pride is a company with a team which has years of experience in automotive industry. We believe in giving new life to your machine. Having said that we are into customization of Jeeps.</p>
    </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>

    </div>
<Slide />

<div className="tabu" >
<div className="tabs"> 
<div data-aos="zoom-out-down">
<center>
  
<Tabs fill defaultActiveKey="Various Customize Jeeps" transition={false} id="noanim-tab-example">
  <Tab className="tt" eventKey="Various Customize Jeeps" title="Various Customize Jeeps">
  <h2>WE LOVED TO CUSTOMIZE JEEPS</h2>
  <br/>
    Jeep Willy’s<br/>
    Jeep Wrangler<br/>
    Jeep CJ<br/>
    Jeep Cherokee<br/>
    Jeep Commando<br/>

  </Tab>
  <Tab className="tt" eventKey="Engine Used" title="Engine Used">
  <h2>We use best quality of engines according to customer requirements</h2><br/>
TOYOTA 3c TURBO ENGINE (2800cc)<br/>
TOYOTA 2c TURBO ENGINE ( 2400cc)<br/>
TOYOTA 2c ENGINE (WITHOUT TURBO)<br/>
MAHINDRA BOLERO TURBO ENGINE<br/>
MAHINDRA MDI ENGINE (40 HP engine)<br/>
MAHINDRA DI ENGINE (35 HP engine)<br/>
SQURPIO ENGINE<br/>
ISSZU ENGINE<br/>
  </Tab>
  <Tab className="tt" eventKey="Gears Used" title="Gears Used">
  <h2>Various Type of Gears Used are</h2><br/>
Automatic Transmission<br/>
4*4 GEAR<br/>
5 SPEED ALL TYPES<br/>
5 SPEED NGT<br/>
4 SPEED MDI<br/>
3 SPEED DI etc.<br/>
  </Tab>
  <Tab className="tt" eventKey="Best Quality Jeeps" title="Best Quality Jeeps">
  <h2>Quality Matters</h2><br/>
We use the best quality of Engines, Paints and accessories to modify our jeeps.
  </Tab>
  <Tab className="tt" eventKey="Customer Satisfication" title="Customer Satisfication">
  <h2>WE LOVE OUR CUSTOMERS</h2><br/>
We use best quality engines to Modify Jeeps with 100% Customer Satisfaction.
  </Tab>
  <Tab className="tt"   eventKey="Home Town Delivery" title="Home Town Delivery">
  <h2>WE LOVE OUR CUSTOMERS</h2><br/>
We deliver the best quality Customized  jeeps to the customer home town withh 100% Guarantee.
Note: We only take orders online
  </Tab>
</Tabs>
</center>
</div>
</div>
</div>
        




<div class="pax">

<article>
<figure>
<img src='images/j11.jpeg' alt />
</figure>
<section>
  <div>
    <h2>WELCOME TO OWNERS PRIDE</h2>
    <p>Owners Pride Welcomes You. Owners Pride Are  Rebuild Of Various Kind Of Customized Jeeps From The Last 15 Years And Are The Best Customized Jeep Customization In India.<br/>
    Yes, the flexbox is old now.</p>
  </div>
</section>

<figure>
<img src='images/j12.jpg' alt />
</figure>
<section>
<div>
  <h2>WE FULL FILL YOUR REQUIREMENTS</h2>
  <p>We  Customized Open Jeeps, Customized Closed Jeeps, Willy Jeeps, Landi Jeeps, Hunter Jeeps, Customized 4X4 Jeeps, Customized Thar Jeeps Etc. According To The Taste Or Requirements Of Our Valuable Customer.
  We Have The Most Experienced Team Of Engineers And Latest Technology Equipment’s Used By Those Engineers For Customized Jeeps. We Make All Modals Which Are Known In Different Languages As Customized Willys Jeep, Ford Jeep, Open Classic Jeep, Hunter Jeep And Landi Jeeps. 
  We Customize The Jeeps With Various Options For Seats, Tyres, Alloys, Accessories. 
  We Have A Wide Ranges Of Customized Jeeps In Our Stock To Select According To Your Choice And Demand. We Give Jeeps Not Only Attractive Look But Give Best Quality Also. Money Is Not Our Aim. Our Main Target Is To Fulfill The Hobby And Wishes Of Jeep Lovers. 
  In All States Of India We Have Delivered Customized Open Jeeps.
  </p>
</div>
</section>

<figure>
<img src='images/j13.jpg' alt />
</figure>
<section>
<div>
  <h2>OUR TEAM</h2>
  <p> We Have Our Own Workshop And Trained Mechanic Unit. Jeeps Full Modification Cross Through Our Hands. 
Now No Need To Run Here And There For Open Jeeps. 
We Provide Not Only Customized OPEN JEEPS. 
But You Can Also Get Customized CLOSED JEEPS. 
It All Depends On CustoMers Choice.
 We Use Excellent Condition Engines In Our OPEN Customized JEEPS. 
 We Transport Customized Open Jeeps In All States Of India. 
 Get Customized Open Jeeps To Your Home Town. We Work On Customers Faith. 
So If You Are Going To Purchase Customized OPEN JEEPS Then Once Make Contact With Us.</p>
</div>
</section>




</article>

</div>
   <Footer />
  </div>
  
)
