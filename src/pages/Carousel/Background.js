import { Container, Row, Carousel } from 'react-bootstrap'
import './Background.css'


const Background = () => {
  return (
    <Row>
      <Container>
          <Carousel variant="dark">
              <Carousel.Item>
                  <img
                  className="d-block w-100 Mcarousel"
                  src="https://celtra.com/wp-content/uploads/2018/11/Precision_Marketing-v1b.png"
                  alt="First slide"
                  />
                  <Carousel.Caption>
                  <h3>Social & Digital Marketing</h3>
                  <h5>Admission going on. This courses will start very soon.</h5>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                  className="d-block w-100 Mcarousel"
                  src="https://thumbs.dreamstime.com/b/learn-english-text-little-girl-using-laptop-computer-learn-english-text-little-girl-using-laptop-computer-floor-108609989.jpg"
                  alt="Second slide"
                  />
                  <Carousel.Caption>
                  <h3 className="text-dark">MA in English</h3>
                  <h5 className="text-dark">Admission going on. This courses will start very soon.</h5>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                  className="d-block w-100 Mcarousel"
                  src="https://static.wixstatic.com/media/e86a17_cb9db1f4955443a2a06e75a9959055c3~mv2.jpg/v1/fill/w_776,h_328,al_c,q_80,usm_0.66_1.00_0.01/CSE%20Dept%20Image.webp"
                  alt="Third slide"
                  />
                  <Carousel.Caption>
                  <h3 className="text-dark">Computer Science & Engineering</h3>
                  <h5 className="text-dark">Admission going on. This courses will start very soon.</h5>
                  </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
      </Container>
      </Row>
  )
}

export default Background
