import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Form, Row, Button, Modal, Container, Spinner } from "react-bootstrap";

function AddProduct(props) {
  const userDetails = useSelector((state) => state.user.user);
  const addProduct = async () => {
    const token = userDetails.token;
    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BACKEND_URL}/product`,
      headers: { authorization: `Bearer ${token}` },
      data: addProductData,
    });
  };
  const [loading, setLoading] = useState(false);
  const [addProductData, setAddProductData] = useState({
    name: "",
    quantity: "",
    imageurl: "",
    storeId: "",
  });

  const handleAddProductSubmit = (e) => {
    e.preventDefault();
    addProduct();
    setAddProductData({
      name: "",
      quantity: "",
      imageurl: "",
      storeId: "",
    });
    props.setModalShow(false);
  };

  const handleAddProductChange = (e) => {
    const { name, value } = e.target;
    setAddProductData((previousValue) => ({
      ...previousValue,
      storeId: props.storeId,
    }));
    setAddProductData((previousValue) => ({ ...previousValue, [name]: value }));
  };

  const handleImageUpload = async (e) => {
    const { files } = e.target;
    setLoading(true);
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "sfw_product_img");

    const cloudinaryRes = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_CLOUDINARY_API_URL}`,
      data,
    });

    setAddProductData((previousValue) => ({
      ...previousValue,
      imageurl: cloudinaryRes.data.secure_url,
    }));
    setLoading(false);
  };

  return (
    <div>
      <Modal
        show={props.modalShow}
        onHide={() => props.setModalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form onSubmit={handleAddProductSubmit}>
              <Form.Group as={Row}>
                <Form.Control
                  required
                  type="text"
                  placeholder="Product Name"
                  name="name"
                  value={addProductData.name}
                  onChange={handleAddProductChange}
                />
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Control
                  required
                  type="number"
                  placeholder="Quantity"
                  name="quantity"
                  value={addProductData.quantity}
                  onChange={handleAddProductChange}
                  min="0"
                />
              </Form.Group>

              <Form.Group as={Row}>
                <label htmlFor="image">Choose a product picture:</label>
                <Form.Control
                  type="file"
                  name="image"
                  id="image"
                  placeholder="Upload Product Image"
                  onChange={handleImageUpload}
                />
              </Form.Group>

              <Form.Group as={Row} className="float-right">
                <Button
                  type="submit"
                  disabled={!addProductData.imageurl}
                  onClick={() => props.setModalShow(false)}
                >
                  {loading ? (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  ) : (
                    "Add"
                  )}
                </Button>
              </Form.Group>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={() => props.setModalShow(false)}>Close</Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddProduct;
