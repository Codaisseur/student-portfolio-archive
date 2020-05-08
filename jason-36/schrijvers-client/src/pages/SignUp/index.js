import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import './signup.css';

export default function SignUp() {
  const [name, setName] = useState("");
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
    event.preventDefault();

    dispatch(signUp(name, email, password));

    setEmail("");
    setPassword("");
    setName("");
  }

  return (
    <div className="signup-page">
    <Container >
      <Form as={Col} md={{ span: 6, offset: 3 }} className="">
        <h1 className="mb-5" style={{ fontFamily: 'Dancing Script', fontSize: '50px' }}>Schrijf je in </h1>
        <Form.Group controlId="formBasicName" style={{fontFamily: 'Special Elite'}}>
          <Form.Label style={{fontFamily: 'Special Elite'}}>Naam</Form.Label>
          <Form.Control
            value={name}
            onChange={event => setName(event.target.value)}
            type="text"
            placeholder="Voer naam in"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail" style={{fontFamily: 'Special Elite'}}>
          <Form.Label >E-mailadres</Form.Label>
          <Form.Control
            value={email}
            onChange={event => setEmail(event.target.value)}
            type="email"
            placeholder="Voer e-mail in"
            required
          />
          <Form.Text className="text-muted">
            We delen nooit je e-mail met derden.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword" style={{fontFamily: 'Special Elite'}}>
          <Form.Label >Wachtwoord</Form.Label>
          <Form.Control
            value={password}
            onChange={event => setPassword(event.target.value)}
            type="password"
            placeholder="Voer wachtwoord in"
            required
          />
        </Form.Group>
        <Form.Group className="mt-5" >
          <Button variant="secondary" type="submit" onClick={submitForm}>
            Inschrijven
          </Button>
        </Form.Group>
        <Link to="/login" style={{fontFamily: 'Special Elite', color: 'red'}}>Klik hier om je aan te melden</Link>
      </Form>
    </Container>
    </div>
  );
}
