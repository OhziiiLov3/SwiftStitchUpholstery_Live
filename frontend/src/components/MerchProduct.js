import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const MerchProduct = ({ merchProduct }) => {
  return (
    <Container className="d-flex align-items-center justify-content-center mx-auto p-2">
      <Card
        style={{ width: "18rem", backgroundColor: "#2A2928" }}
        className="my-2 p-2 rounded"
      >
        <Link to={`/product/${merchProduct._id}`}>
          <Card.Img
            className="productCard img-fluid mx-auto d-block w-100 my-3 py-2"
            src={merchProduct.image}
            variant="top"
          />
        </Link>
        <Card.Body>
          <Link to={`/product/${merchProduct._id}`}>
            <Card.Title as="div">
              <strong>{merchProduct.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="h3">
            <div className="cardText">${merchProduct.price}</div>
          </Card.Text>
          <hr />
          <Card.Text as="p">
            <div className="cardText">InStock: {merchProduct.countInStock}</div>
            <div className="cardText">{merchProduct.description}</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MerchProduct;
