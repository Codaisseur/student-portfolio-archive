import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import './login.css';

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    console.log("hi");
    event.preventDefault();

    dispatch(login(email, password));

    setEmail("");
    setPassword("");
  }

  return (
    <div className='login-page'>
    <Container >
      <Form as={Col} md={{ span: 6, offset: 3 }} className="">
  
        <h1 className="mb-5" style={{ fontFamily: 'Dancing Script', fontSize: '50px' }}>Login</h1>
        <Form.Group controlId="formBasicEmail" style={{fontFamily: 'Special Elite'}}>
          <Form.Label >E-mailadres</Form.Label>
          <Form.Control
            value={email}
            onChange={event => setEmail(event.target.value)}
            type="email"
            placeholder="Voer e-mail in"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" style={{fontFamily: 'Special Elite'}}>
          <Form.Label>Wachtwoord</Form.Label>
          <Form.Control
            value={password}
            onChange={event => setPassword(event.target.value)}
            type="password"
            placeholder="Voer wachtwoord in"
            required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="secondary" type="submit" onClick={submitForm}>
            Log in
          </Button>
        </Form.Group>
        <Link to="/signup" style={{ textAlign: "center", color: "red", fontFamily: 'Special Elite' }}>
          Klik hier om je in te schrijven
        </Link>
      </Form>
    </Container>
    </div>
  );
}
