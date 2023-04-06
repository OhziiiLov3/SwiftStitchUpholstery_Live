import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
// import FormContainer from "../components/FormContainer";
import { login } from "../actions/userActions";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirect = location.state ? Number(location.state) : "/";
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email,password))
  };

  useEffect(()=>{
    if(userInfo){
      navigate(redirect)
    }
  },[navigate,userInfo, redirect])
  

  return (
    <Container className="my-5 p-3">
      <h1 className="mx-auto py-3">Sign In</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Row className="justify-content-md-center bg-secondary">
        <Col xs={12} md={6}>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3 py-3" controlId="email">
              <Form.Label style={{ color: "#30303080" }}>
                Email Address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label style={{ color: "#30303080" }}>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button className="my-3 p-2" type="submit" variant="light">
              Sign In
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="py-3">
        <Col>
          New Customer ?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Register
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginScreen;
