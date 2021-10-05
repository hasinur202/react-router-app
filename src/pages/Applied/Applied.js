import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import completed from '../../images/check-circle.gif'
import './Applied.css'

const Applied = () => {
    return (
    <Container fluid='md'>
      <Row>
        <Col>
          <div className='mt-5 text-center successImg'>
            <img alt="Success" src={completed} />
          </div>
        </Col>
      </Row>
    </Container>
    );
};

export default Applied;