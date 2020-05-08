import React from "react";
import { Row, Modal, Button } from "react-bootstrap";

function OrderProcessed(props) {
  return (
    <div>
      <Modal
        id={props.lgOrderShow.product.id}
        size="lg"
        show={props.lgOrderShow.show}
        onHide={() =>
          props.setLgOrderShow(previousValue => ({
            ...previousValue,
            show: false
          }))
        }
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {props.lgOrderShow.product.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>Great! Your order is reserved.</Row>
          <Row>
            Your Order id is -
            <span className="font-weight-bold">
              {" "}
              &nbsp;
              {props.orderDetails.order_id}
            </span>{" "}
          </Row>
          <Row>
            Kindly collect the order in store in 30 minutes or your order will
            expire
          </Row>
          <Row>
            Address: {props.lgOrderShow.product.store.name},{" "}
            {props.lgOrderShow.product.store.address},{" "}
            {props.lgOrderShow.product.store.postal_code}
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() =>
              props.setLgOrderShow(previousValue => ({
                ...previousValue,
                show: false
              }))
            }
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default OrderProcessed;
