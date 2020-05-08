import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../action/user";
import {
  Form,
  Button,
  Jumbotron,
  Row,
  Col,
  ButtonToolbar,
  Container,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Login.css";

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((previousValue) => ({ ...previousValue, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginFormData.email, loginFormData.password, history));
  };

  return (
    <div className="login-section">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            {" "}
            <Jumbotron className="login-jumbotron bg-white">
              <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="formBasicEmail">
                  <Form.Label column sm={2}>
                    Email
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={loginFormData.email}
                      onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formBasicPassword">
                  <Form.Label column sm={2}>
                    Password
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={loginFormData.password}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <ButtonToolbar
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="primary"
                    type="submit"
                    style={{ marginTop: "10px" }}
                  >
                    Login
                  </Button>
                </ButtonToolbar>
              </Form>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
