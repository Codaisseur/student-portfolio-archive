import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/user/actions";

export default function Logout() {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const Logout = () => {
    dispatch(logout());
    setToggle(true);
  };

  return (
    <div className="logout">
      <h1>Log out</h1>
      <button onClick={Logout}>Logout</button>
      {toggle && <h2>See you soon!</h2>}
    </div>
  );
}
