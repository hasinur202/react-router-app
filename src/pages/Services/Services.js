
import React from 'react';
import { Button, Card, Col, Modal } from 'react-bootstrap';
import './Services.css'
import Rating from 'react-rating';
import { LinkContainer } from 'react-router-bootstrap';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';

const Services = (props) => {
    const { name, fee, img, category, ratting, count, duration } = props.service;
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Col>
            <Card>
                <div className="category">#{category}</div>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="text-center">{name}</Card.Title>
                    <Card.Text className="text-center">
                        Course Fee: ${fee}<br/>
                        <p>Course Duration: {duration} Years </p>
                    </Card.Text>
                    <div className="text-center">
                        <Rating
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            initialRating={ratting}
                            readonly
                        ></Rating> {ratting} ({count})
                    </div>
                    <div className="text-center mt-2">
                        <button onClick={() => setModalShow(true)} type='button' className='btn btn-primary btn-sm me-2'>
                            View Details
                        </button>
                        <MyVerticallyCenteredModal
                            data={props.service}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                        <LinkContainer to='/applied'>
                            <button type='button' className='btn btn-success btn-sm me-2'>
                                Apply
                            </button>
                        </LinkContainer>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Services;