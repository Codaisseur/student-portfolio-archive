import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../store/user/actions";

export default function LoginFormContainer() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setToggle(true);
    dispatch(login(email, password));
  };

  return (
    <div className="login">
      <h1>Log in</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <button type="submit">Log in</button>
      </form>
      {toggle && (
        <h2>
          You logged in! <Link to="/">Go to Search</Link>
        </h2>
      )}
    </div>
  );
}
