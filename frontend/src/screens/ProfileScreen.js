import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Table , Alert} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userContstants";
import { ListMyOrders } from "../actions/orderActions";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfrimPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading:loadingOrders, error:errorOrders, orders} = orderListMy;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!user || !user.name || success || userInfo._id !== user._id) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails("profile"));
        dispatch(ListMyOrders())
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, navigate, userInfo, user, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(
        updateUserProfile({
          id: user._id,
          name: name,
          email: email,
          password: password,
        }));
        setMessage("")
    }
  };

  return (
    <Row className="my-4 p-3">
      {" "}
      <Col md={3}>
        <h1 className="my-3 p-3">User Profile</h1>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Row className="justify-content-md-center bg-dark">
          <Col>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3 py-3" controlId="name">
                <Form.Label style={{ color: "#30303080" }}>Name</Form.Label>
                <Form.Control
                  required
                  type="name"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3 py-3" controlId="email">
                <Form.Label style={{ color: "#30303080" }}>
                  Email Address
                </Form.Label>
                <Form.Control
                  required
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

              <Form.Group className="mb-3" controlId="passwordConfirm">
                <Form.Label style={{ color: "#30303080" }}>
                  {" "}
                  Confirm Password
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfrimPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Button className="my-3 p-2" type="submit" variant="light">
                Update
              </Button>
            </Form>
          </Col>
        </Row>
      </Col>
      <Col md={9}>
        <h1 className="my-3 p-3">My Orders</h1>
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Alert variant="danger">{errorOrders}</Alert>
        ) : (
          <Table striped responsive hover size="sm">
            <thead>
              <tr>
                <th className="text-light">ID</th>
                <th className="text-light">Date</th>
                <th className="text-light">Total</th>
                <th className="text-light">Paid</th>
                <th className="text-light">Delivered</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td className="text-light">{order._id}</td>
                  <td className="text-light">
                    {order.createdAt.substring(0, 10)}
                  </td>
                  <td className="text-light">${order.totalPrice}</td>
                  <td className="text-light">
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <i className="fas fa-times" style={{ color: "red" }}></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button variant="light" className="btn-sm">Details</Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  );
};

export default ProfileScreen;
