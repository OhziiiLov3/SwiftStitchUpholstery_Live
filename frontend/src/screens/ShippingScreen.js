import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import Checkout from "../components/Checkout";
import logo from "../assets/PrimaryIcon.png";

const ShippingScreen = () => {

 const cart = useSelector(state => state.cart)
 const {shippingAddress} = cart 
 const dispatch = useDispatch()
 const navigate = useNavigate()

 const [address, setAddress] = useState(shippingAddress.address);
 const [city, setCity] = useState(shippingAddress.city);
 const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
 const [country, setCountry] = useState(shippingAddress.country);

 const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({address,city, postalCode,country}))
    navigate("/payment")
 }

  return (
    <div className="my-3 p-5">
      <Container className="my-5 p-3">
        <Checkout step1 step2 />
        <h1> Shipping</h1>
        <Row
          className="justify-content-md-center rounded"
          style={{ backgroundColor: "#2A2928" }}
        >
          <a className="navbar-brand justify-content-center mt-3" href="/">
            <img className="logo" src={logo} alt="logo..." />
          </a>
          <Col xs={12} md={6}>
            <h2 className="text-center">Shipping Information</h2>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3 py-3" controlId="address">
                <Form.Label style={{ color: " #FFFFFF " }}>Address</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Address"
                  value={address ? address : ""}
                  onChange={(e) => setAddress(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3 py-3" controlId="city">
                <Form.Label style={{ color: "#FFFFFF " }}>City</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter City"
                  value={city ? city : ""}
                  onChange={(e) => setCity(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3 py-3" controlId="postalCode">
                <Form.Label style={{ color: "#FFFFFF " }}>
                  Postal Code
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Postal Code"
                  value={postalCode ? postalCode : ""}
                  onChange={(e) => setPostalCode(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3 py-3" controlId="country">
                <Form.Label style={{ color: "#FFFFFF " }}>Country</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Country"
                  value={country ? country : ""}
                  onChange={(e) => setCountry(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button
                className="btn-block my-3"
                type="submit"
                variant="light"
                style={{ backgroundColor: "#C19C6A" }}
              >
                Continue
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShippingScreen;
