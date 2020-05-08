import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { logoutProfilePage } from "../../store/profilePage/actions";

export default function LoggedIn() {
  const dispatch = useDispatch();

  function logoutHandler() {
    dispatch(logOut());
    dispatch(logoutProfilePage());
  }
  
  return (
    <>
      <Button variant="dark" onClick={logoutHandler}>Uitloggen</Button>
    </>
  );
}
