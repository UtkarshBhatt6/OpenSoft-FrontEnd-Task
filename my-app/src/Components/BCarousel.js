import React from 'react'
import {Carousel} from "react-bootstrap"
export default function BCarousel() {
  return (
    <div>
       <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg"
          alt="First slide  " height='600px' 
        />
        <Carousel.Caption>
          <h3>Bollywood Spice</h3>
          <p>A taste you will remember !</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.posist.com/restaurant-times/wp-content/uploads/2016/07/restaurant-449952_1280-800x533.jpg"
          alt="Second slide " height='600px'
        />

        <Carousel.Caption>
          <h3>Bollywood Spice</h3>
          <p>For the love of delicious food</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.vox-cdn.com/thumbor/OheW0CNYdNihux9eVpJ958_bVCE=/0x0:5996x4003/1200x900/filters:focal(1003x1633:1961x2591)/cdn.vox-cdn.com/uploads/chorus_image/image/51830567/2021_03_23_Merois_008.30.jpg"
          alt="Third slide" height='600px'
        />

        <Carousel.Caption>
          <h3>Bollywood Spice</h3>
          <p>
          A taste of home
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
    </div>
  )
}
