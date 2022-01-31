import React from 'react';
import { Container } from '@mui/material';
import { Carousel } from 'react-bootstrap';

function Slider() {
  return (
    <Container sx={{ mt: 10 }}>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://geographical.co.uk/media/k2/items/cache/e533c4b8d2d2d3798f3271c35ca6e050_XL.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.theuiaa.org/wp-content/uploads/2017/11/RTM19-banner-web.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </Container>
  )
}

export default Slider;
