import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Meta from '../../components/Meta/Meta'

const Contact = () => {
    const pageTitle = 'Contact'
  return (
    <Container fluid='md'>
        <Meta title={pageTitle}/>
        <div className="row pt-5">
            <div className="site-heading text-center">
                <h3>Contact Us</h3>
                <p>You can easily reach us through filling up the form below</p>
                <div className="border"></div>
            </div>
        </div>
      <Row className="pb-5">
        <Col>
          <div className='card'>
            <div className='card-body'>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Subject" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Messages</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
                </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
