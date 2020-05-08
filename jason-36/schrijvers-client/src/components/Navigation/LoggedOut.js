import React from "react";
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";

export default function LoggedOut() {
  return (
    <>
      <Button variant="secondary" to="/login" as={NavLink} >Inloggen</Button>
    </>
  );
}
