import React, {useEffect} from 'react'
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, ListGroup, Image, Form, Button, Card, Alert} from 'react-bootstrap'
// import Message from '../components/Message'
import {addToCart, removeFromCart} from '../actions/cartActions'

const CartScreen = () => {
  const location = useLocation()
  let navigate = useNavigate()
  const params = useParams()
  const productId = params.id
  const qty = location.search ? Number(location.search.split('=')[1]) :1
  const dispatch = useDispatch()

  const cart = useSelector( state => state.cart)
  const { cartItems } = cart;
  console.log("cartItems:=>", cartItems); 

  const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;


  useEffect(() => {
    if(productId){
      dispatch(addToCart(productId, qty));
    }
  },[dispatch, productId, qty])


  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }


  const checkoutHandler = () => {
      if(!userInfo){
        navigate("/login?redirect=shipping");
      }else{
        navigate("/shipping");
      }   
    
  }

  return (
    <>
      <Row className="my-4 p-3">
        <Col md={8}>
          <h1 className="my-3 p-3"> Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Alert variant="warning">
              Your cart is empty{" "}
              <Link to="/">
                <h2>Go Back</h2>
              </Link>
            </Alert>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image
                        className="w-100"
                        src={item.image}
                        alt={item.name}
                        fluid
                        rounded
                      />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>${item.price}</Col>
                    <Col md={3}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={(x += 1)} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={1}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card className="my-4 p-3">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>
                  SubTotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  )
                </h2>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  variant="light"
                  style={{ backgroundColor: "#C19C6A" }}
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Procced to Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default CartScreen