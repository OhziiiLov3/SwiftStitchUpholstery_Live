import React from 'react'
import {  Nav} from "react-bootstrap";
import {  LinkContainer} from "react-router-bootstrap";

const Checkout = ({step1,step2,step3,step4}) => {
  return (
    <Nav
      className="d-flex justify-content-center mb-5 rounded"
      style={{ backgroundColor: "#2A2928" }}
    >
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disbaled>Login</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link>Shipping</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disbaled>Shipping</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link>Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disbaled>Payment</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link>Place Order</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disbaled>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
}

export default Checkout