import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
const moment = require("moment");

export default function ProfileStory(props) {
  const time = moment(props.createdAt).fromNow();

  return (
    <div className="profile-story">
      <div>
        <h3>{props.title}</h3> posted: {time}
      </div>
      <Nav.Link as={NavLink} to={`story/info/${props.id}`}>
        <Button variant="secondary">
          Info
        </Button>
      </Nav.Link>
    </div>
  );
}
