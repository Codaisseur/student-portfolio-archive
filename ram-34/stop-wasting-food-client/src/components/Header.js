import React, { useState } from "react";
import axios from "axios";
import { Navbar, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../action/user";
import "./Header.css";
import ProcessOrder from "./Product/ProcessOrder";
import AddProduct from "./Product/AddProduct";

export default function Header() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const userDetails = useSelector((state) => state.user.user);
  const [lgShow, setLgShow] = useState({
    show: false,
    response: {},
  });
  const [modalShow, setModalShow] = useState(false);
  const [storeId, setStoreId] = useState("");
  const handleAddProduct = (e) => {
    const getStore = async () => {
      const token = userDetails.token;
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}/store?userId=${userDetails.id}`,
        headers: { authorization: `Bearer ${token}` },
      });
      setStoreId(response.data.id);
    };
    getStore();
    setModalShow(true);
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="header-section">
        <Navbar.Brand href="/">Stop Food Wastage</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            {userDetails.id ? null : <Nav.Link href="/login">Login</Nav.Link>}
            {userDetails.id ? null : (
              <Nav.Link eventKey={2} href="/signup">
                Sign Up
              </Nav.Link>
            )}
            {userDetails.roleId && userDetails.roleId === 1 && (
              <Nav.Link
                eventKey={3}
                onClick={() =>
                  setLgShow((prevValue) => ({ ...prevValue, show: true }))
                }
              >
                Process Order
              </Nav.Link>
            )}
            {userDetails.roleId && userDetails.roleId === 1 && (
              <Nav.Link eventKey={4} onClick={handleAddProduct}>
                Add Product
              </Nav.Link>
            )}
            {!userDetails.id ? null : (
              <Nav.Link eventKey={5} href="/" onClick={handleLogout}>
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <ProcessOrder
        userDetails={userDetails}
        lgShow={lgShow}
        setLgShow={setLgShow}
      />
      <AddProduct
        setModalShow={setModalShow}
        modalShow={modalShow}
        storeId={storeId}
      />
    </div>
  );
}
