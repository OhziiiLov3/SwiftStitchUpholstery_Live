import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FormContainer = ({childern}) => {
  
  return (
    <Container className="my-5 p-3">
      <Row >
        <Col xs={12} md={6}>
          <div>{childern}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
