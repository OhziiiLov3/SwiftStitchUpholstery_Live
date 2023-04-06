import React from 'react'
import  {Card, Container} from 'react-bootstrap'
import {Link} from "react-router-dom";

const Product = ({product}) => {
  return (
    <Container className="d-flex align-items-center justify-content-center mx-auto p-2">
      <Card
        style={{ width: "18rem", backgroundColor: "#2A2928" }}
        className="my-2 p-2 rounded"
      >
        <Link to={`/product/${product._id}`}>
          <Card.Img
            className="productCard img-fluid mx-auto d-block w-100 my-3 py-2"
            src={product.image}
            variant="top"
          />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="h3">
            <div className="cardText">${product.price}</div>
          </Card.Text>
          <hr />
          <Card.Text as="p">
            <div className="cardText">Model: {product.model}</div>
            <div className="cardText">Make: {product.make}</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Product