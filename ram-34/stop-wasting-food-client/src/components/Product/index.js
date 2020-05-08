import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsFetched, productFetched } from "../../action/product";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import { CardDeck, Container, Row } from "react-bootstrap";
import "./Product.css";
import { reserveOrder } from "../../action/order";
import OrderProcessed from "./OrderProcessed";

function Product(props) {
  const dispatch = useDispatch();

  const [lgShow, setLgShow] = useState({
    show: false,
    detailsPopup: {},
  });
  const [lgOrderShow, setLgOrderShow] = useState({
    show: false,
    product: {},
  });

  const [currentPosition, setCurrentPosition] = useState({
    latitude: "",
    longitude: "",
  });

  const userDetails = useSelector((state) => state.user.user);
  const productList = useSelector((state) => state.product);
  const orderDetails = useSelector((state) => state.order);

  useEffect(() => {
    const eventStream = new EventSource(
      `${process.env.REACT_APP_BACKEND_URL}/productlist`
    );
    eventStream.onmessage = (event) => {
      const { data } = event;

      const action = JSON.parse(data);
      const { type, payload } = action;
      if (type === "ALL_PRODUCT") {
        dispatch(productsFetched(payload));
      }
      if (type === "ONE_PRODUCT") {
        dispatch(productFetched(payload));
      }
    };
  }, [dispatch]);
  const handleReserveProductClick = (e) => {
    const { id } = e.target;
    const reservedProduct =
      productList.length > 0 &&
      productList.find((product) => product.id === parseInt(id));
    const reserveOrderData = {
      productId: reservedProduct.id,
      storeId: reservedProduct.storeId,
    };
    const token = userDetails.token;
    dispatch(reserveOrder(reserveOrderData, token));
    setLgShow((previousValue) => ({ ...previousValue, show: false }));
    setLgOrderShow((previousValue) => ({
      ...previousValue,
      show: true,
      product: { ...reservedProduct },
    }));
  };
  const showMoreDetails = (e) => {
    const { id } = e.target;
    const detailsPopup = productList.find(
      (productDetail) => productDetail.id === parseInt(id)
    );
    setLgShow((previousValue) => ({
      ...previousValue,
      show: true,
      detailsPopup: { ...detailsPopup },
    }));
  };
  navigator.geolocation.getCurrentPosition(function (position) {
    setCurrentPosition(() => ({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    }));
  });

  return (
    <div>
      {productList.length > 0 ? (
        <div>
          <Container>
            <Row>
              <CardDeck>
                {productList.map((product) => (
                  <div key={product.id} id={product.id}>
                    <ProductList
                      productDetail={product}
                      userRole={userDetails.roleId}
                      handleClick={handleReserveProductClick}
                      lgShow={lgShow}
                      setLgShow={setLgShow}
                      orderDetails={orderDetails}
                      showMoreDetails={showMoreDetails}
                    />
                  </div>
                ))}
              </CardDeck>
            </Row>
          </Container>
        </div>
      ) : null}
      <div>
        {lgShow.show && (
          <ProductDetails
            lgShow={lgShow}
            currentPosition={currentPosition}
            setLgShow={setLgShow}
            handleReserveProductClick={handleReserveProductClick}
          />
        )}
      </div>
      <div>
        {lgOrderShow.show && (
          <OrderProcessed
            lgOrderShow={lgOrderShow}
            setLgOrderShow={setLgOrderShow}
            orderDetails={orderDetails}
          />
        )}
      </div>
    </div>
  );
}

export default Product;
