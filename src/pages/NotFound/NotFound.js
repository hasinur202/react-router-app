import { Container, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const NotFound = () => {
  return (
    <Container fluid='md'>
      <Row>
        <Col>
          <div className='card mt-5 text-center'>
            <h1 className='card-header text-danger'>404</h1>
            <div className='card-body'>
              <h5 className='card-title'>OPPS! Requested Page Was Not Found</h5>
              <p className='card-text'>
                <code>Sorry, the page you're looking for doesn't exist. You can return to home and look for another.</code>
              </p>
              <LinkContainer to='/'>
                <button className='btn btn-primary'>Home Page</button>
              </LinkContainer>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
