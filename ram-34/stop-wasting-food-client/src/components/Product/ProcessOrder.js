import React, { useState } from "react";
import axios from "axios";
import { Button, Modal, Form, Row, Container } from "react-bootstrap";
function ProcessOrder(props) {
  // const [props.lgShow, props.setLgShow] = useState({
  //   show: false,
  //   response: {}
  // });
  const [orderId, setOrderId] = useState("");
  console.log("Checking orderId", orderId);
  const handleClick = async e => {
    e.preventDefault();
    const token = props.userDetails.token;

    try {
      const response = await axios({
        method: "PUT",
        url: `${process.env.REACT_APP_BACKEND_URL}/processorder`,
        headers: { authorization: `Bearer ${token}` },
        data: { orderId }
      });
      console.log("checking res in order process", response);

      props.setLgShow(prevValue => ({
        ...prevValue,
        response: { ...response }
      }));
    } catch (error) {
      console.log(error.response);
      props.setLgShow(prevValue => ({
        ...prevValue,
        response: { ...error.response }
      }));
    }
  };

  return (
    <Container>
      <Row>
        <Modal
          size="lg"
          show={props.lgShow.show}
          onHide={() =>
            props.setLgShow(prevValue => ({ ...prevValue, show: false }))
          }
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Process Order
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {props.lgShow.response.status === 200 ? (
              <p>Order Processed</p>
            ) : props.lgShow.response.status === 400 ? (
              <p>{props.lgShow.response.data}</p>
            ) : null}
            <Form>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Order Id"
                  name="orderId"
                  value={orderId}
                  onChange={e => setOrderId(e.target.value)}
                />
              </Form.Group>
              <Button onClick={handleClick}>Process Order</Button>
              <Button
                onClick={() =>
                  props.setLgShow(prevValue => ({ ...prevValue, show: false }))
                }
              >
                Close
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Row>
    </Container>
  );
}

export default ProcessOrder;
