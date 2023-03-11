import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // This is required for the Carousel to work
import { Carousel } from 'react-responsive-carousel';
import boston from '../../pictures/boston.jpg'
import pierce from '../../pictures/pierce.jpg'
import acadia from '../../pictures/acadia.jpg'
import lincoln from '../../pictures/lincoln.jpg'

export default function Home() {

  return (
    <div>
      <Carousel autoPlay>
        <div>
          <img width="100%" src={lincoln} alt="lincoln" />
        </div>
        <div>
          <img width="100%" src={boston} alt="boston" />
        </div>
        <div>
          <img width="100%" src={acadia} alt="acadia" />
        </div>
        <div>
          <img width="100%" src={pierce} alt="pierce" />
        </div>
      </Carousel>
      <h1>Rob</h1>
    </div>
  );
}