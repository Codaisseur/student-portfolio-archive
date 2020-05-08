import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const selectUser = (reduxState) => {
  return reduxState.session.user;
};
const selectToken = (reduxState) => {
  return reduxState.session.jwt;
};

export default function Header() {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  return (
    <div className="header">
      <Link to={"/"}>Home</Link>
      {token ? (
        <div>
          <Link to="/logout">Log out</Link>
          <Link to={`/user/${user.id}`}>My page</Link>
        </div>
      ) : (
        <div>
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      )}
    </div>
  );
}
