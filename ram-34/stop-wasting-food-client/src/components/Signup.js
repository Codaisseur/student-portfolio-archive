import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Row, Col, Button, Jumbotron, Container } from "react-bootstrap";
import { signUp } from "../action/user";
import { Link, useHistory } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const [signupFormData, setSignupFormData] = useState({
    name: "",
    email: "",
    password: "",
    roleId: "",
    storeName: "",
    storeAddress: "",
    city: "",
    postalCode: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupFormData((previousValue) => ({ ...previousValue, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signUp(signupFormData, history));
    setSignupFormData({
      name: "",
      email: "",
      password: "",
      roleId: "",
      storeName: "",
      storeAddress: "",
      city: "",
      postalCode: "",
    });
  };

  return (
    <div>
      <Container className="signup-section">
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            {" "}
            <Jumbotron className="signup-jumbotron bg-white">
              {state.userCreated ? <h1>Account created</h1> : null}
              <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="formHorizontalName">
                  <Form.Label column sm={2}>
                    Name
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={signupFormData.name}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={2}>
                    Email
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      required
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={signupFormData.email}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Form.Label column sm={2}>
                    Password
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      required
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={signupFormData.password}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <fieldset>
                  <Form.Group as={Row}>
                    <Form.Label as="legend" column sm={2}>
                      Role
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        label="Seller"
                        id="1"
                        name="roleId"
                        value="1"
                        onChange={handleChange}
                      />
                      <Form.Check
                        type="radio"
                        label="Buyer"
                        id="2"
                        name="roleId"
                        value="2"
                        onChange={handleChange}
                      />
                    </Col>
                  </Form.Group>
                </fieldset>

                {signupFormData.roleId === "1" ? (
                  <div>
                    <Form.Group as={Row} controlId="formHorizontalName">
                      <Form.Label column sm={2}>
                        Store Name
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Store Name"
                          name="storeName"
                          value={signupFormData.storeName}
                          onChange={handleChange}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalName">
                      <Form.Label column sm={2}>
                        Store Address
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Store Address"
                          name="storeAddress"
                          value={signupFormData.storeAddress}
                          onChange={handleChange}
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalName">
                      <Form.Label column sm={2}>
                        Store Address
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control
                          required
                          type="text"
                          placeholder="City"
                          name="city"
                          value={signupFormData.city}
                          onChange={handleChange}
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                      <Form.Label column sm={2}>
                        Postal Code
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Postal Code"
                          name="postalCode"
                          value={signupFormData.postalCode}
                          onChange={handleChange}
                        />
                      </Col>
                    </Form.Group>
                  </div>
                ) : null}
                <Form.Group as={Row}>
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit" disabled={!signupFormData.roleId}>
                      Submit
                    </Button>
                    <Link to="/">
                      <Button variant="outline-secondary">Back to Home</Button>
                    </Link>
                  </Col>
                </Form.Group>
              </Form>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;
