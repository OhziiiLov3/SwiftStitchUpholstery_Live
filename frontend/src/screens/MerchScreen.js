import React from 'react'
import {Container,Row, Col } from "react-bootstrap";
import Contact from '../components/Contact';
import MerchProduct from '../components/MerchProduct';

import merchProducts from '../merchProducts'

const MerchScreen = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center mx-auto p-2">
      <div className="my-3 p-5">
        <h1 className="mx-auto py-2 text-center">Merchandise</h1>
        <h3 className='text-center'>Coming Soon...</h3>
        <Row>
          {merchProducts.map((product) => (
            <Col key={product._id} sm={12} md={10} lg={6} xl={4}>
              <MerchProduct merchProduct={product} />
            </Col>
          ))}
        </Row>
        <Contact />
      </div>
    </Container>
  );
}

export default MerchScreen