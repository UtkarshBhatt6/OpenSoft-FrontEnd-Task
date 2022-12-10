import React from 'react'
import { Carousel } from "react-bootstrap"
export default function Menu() {
  return (
    <div id='3' className="menu">
      
      <h1>Menu</h1>
      <div id='menuPoint'>
      <div id='menuDesc'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem similique, minus aspernatur nostrum dicta praesentium eius, natus dolores accusamus dolore eligendi tempora nemo consequatur ullam sit. Vitae vero commodi molestias numquam ipsa aut quo?</p>
        <h2>Come Visit Our <button type="button" class="btn btn-light"><a href='./AddToCart'>Menu</a></button> Section </h2>
      </div>
      <div id='dishes'>
        <div>
          <Carousel>
          
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.spiceupthecurry.com/wp-content/uploads/2021/06/rajma-chawal-2.jpg"
                alt="Second slide " height='400px'
              />

              <Carousel.Caption>
                <h3>Come</h3>
                <p>Visit Our Menu Section</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.funfoodfrolic.com/wp-content/uploads/2015/03/Kachori-2.jpg"
                alt="Third slide" height='400px'
              />

              <Carousel.Caption>
                <h3>Come</h3>
                <p>
                Visit Our Menu Section
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      </div>
    </div>
  )
}
