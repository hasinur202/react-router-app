import React from 'react';
import { Button, Modal } from 'react-bootstrap';


function MyVerticallyCenteredModal(props) {
    const { name, fee, category, duration } = props.data;

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {category}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>{name}</h4>
            (Course Fee: ${fee})<br/>
            <p>Course Duration: {duration} Years </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default MyVerticallyCenteredModal;