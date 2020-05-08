import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import * as geolib from "geolib";
import {
  Container,
  Row,
  Modal,
  Button,
  Card,
  ResponsiveEmbed,
  Col
} from "react-bootstrap";

function ProductDetails(props) {
  return (
    <div>
      <Modal
        key={props.lgShow.detailsPopup.id}
        id={props.lgShow.detailsPopup.id}
        size="lg"
        show={props.lgShow.show}
        onHide={() =>
          props.setLgShow(previousValue => ({ ...previousValue, show: false }))
        }
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {props.lgShow.detailsPopup.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="show-grid">
              <Col md={3}></Col>
              <Col md={6}>
                <Card.Img
                  className="modal-image"
                  variant="top"
                  src={props.lgShow.detailsPopup.imageurl}
                />
              </Col>
            </Row>
            <Row className="show-grid product-details">
              <Col md={3}></Col>
              <Col md={8}>
                <Row>
                  Available Quantity: {props.lgShow.detailsPopup.quantity}
                </Row>
                <Row>
                  Store Address: {props.lgShow.detailsPopup.store.name},{" "}
                  {props.lgShow.detailsPopup.store.address},{" "}
                  {props.lgShow.detailsPopup.store.postal_code}
                </Row>
                <Row>
                  This store is
                  <span className="font-weight-bold">
                    &nbsp;
                    {geolib.getPreciseDistance(
                      {
                        latitude: props.currentPosition.latitude,
                        longitude: props.currentPosition.longitude
                      },
                      {
                        latitude: props.lgShow.detailsPopup.store.latitude,
                        longitude: props.lgShow.detailsPopup.store.longitude
                      }
                    ) / 1000}
                    &nbsp;
                  </span>
                  km away from your current location.
                </Row>
              </Col>
            </Row>
            <Card.Title></Card.Title>
            <Row className="show-grid">
              <Col md={2}></Col>
              <Col md={8}>
                <div>
                  <ResponsiveEmbed aspectRatio="16by9">
                    <Map
                      google={props.google}
                      zoom={15}
                      initialCenter={{
                        lat: props.lgShow.detailsPopup.store.latitude,
                        lng: props.lgShow.detailsPopup.store.longitude
                      }}
                    >
                      <Marker name={props.lgShow.detailsPopup.store.name} />
                    </Map>
                  </ResponsiveEmbed>
                </div>
              </Col>
              <Col md={2}></Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            id={props.lgShow.detailsPopup.id}
            onClick={props.handleReserveProductClick}
          >
            Reserve
          </Button>
          <Button
            onClick={() =>
              props.setLgShow(previousValue => ({
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

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(ProductDetails);
