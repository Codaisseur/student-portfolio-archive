import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./ProductList.css";

function ProductList(props) {
  return (
    <Col className="card-container" key={props.productDetail.id}>
      <Card className="productList">
        <Card.Img
          variant="top"
          src={props.productDetail.imageurl}
          style={{ height: "200px" }}
        />
        <Card.Body>
          <Card.Title>{props.productDetail.name}</Card.Title>

          <Row className="card-details card-text">
            {props.productDetail.store.name},
          </Row>
          <Row className="card-details card-text">
            Address: {props.productDetail.store.address},{" "}
            {props.productDetail.store.city},{" "}
            {props.productDetail.store.postal_code}
          </Row>

          {props.userRole === 2 ? (
            <Button
              variant="primary"
              id={props.productDetail.id}
              onClick={props.showMoreDetails}
            >
              More Details
            </Button>
          ) : null}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductList;
