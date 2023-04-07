import React from 'react'
import {Card, Container, Col, Row, Button} from 'react-bootstrap'
import Blog1 from "../assets/MetallicLogoPromoImage.jpg";
import blogs from '../blog'
import Contact from '../components/Contact'

const HomeBlog = ({blog}) => {
  return (
    <Container className="d-flex align-items-center justify-content-center mx-auto p-2">
      <div className="blog-page p-5">
        <h1 className="text-center my-3 py-4">Monthly Blog</h1>
        <Row xs={1} md={2} className="g-4">
          {blogs.map((blog) => (
            <Col className="d-flex align-items-center justify-content-center p-2">
              <Card
                key={blog._id}
                style={{ width: "20rem", backgroundColor: "#2A2928" }}
                className="my-2 p-2 rounded "
              >
                <Card.Img
                  variant="top"
                  className="blogCard img-fluid mx-auto d-block my-3 py-2"
                  src={blog.image}
                />
                <Card.Header>{blog.name}</Card.Header>
                <Card.Body>
                  <Card.Text>{blog.description}</Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Contact />
      </div>
    </Container>
  );
}

export default HomeBlog