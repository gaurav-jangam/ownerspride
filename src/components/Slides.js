import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const images = [
  'images/jeep3.jpg',
  'images/jeep3.jpg',
  'images/jeep3.jpg',
  'images/jeep3.jpg',
  'images/jeep3.jpg',
  'images/jeep3.jpg'
];


function Slides() {
    return (

        <div className="slide-container">
        <Zoom scale={0.1}>
          {
            images.map((each, index) => <img key={index} style={{height: "100px"}} src={each} />)
          }
        </Zoom>
      </div>
       
    )
}

export default Slides

