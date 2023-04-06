import React from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../assets/PrimaryIcon.png";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-scroll";
import SearchBox from "../components/SearchBox"
import {logout} from '../actions/userActions'

const NavbarComponent = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
    console.log("Logout");
  };

  return (
    <Navbar
      fixed="top"
      classname="navbar"
      variant="light"
      expand="lg"
      collapseOnSelect
    >
      <Container fluid>
        <a className="navbar-brand" href="/">
          <img className="logo" src={logo} alt="logo..." />
        </a>
        <LinkContainer to="/">
          <Navbar.Brand>Swift Stitch Upholstery</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          collaspeonselect="true"
          className="mx-4 pe-5"
          id="basic-navbar-nav"
        >
          <SearchBox />
          <Nav className="justify-content-end flex-grow-1 pe-2 ">
            <NavDropdown
              className="nav-item dropdown"
              href="/services"
              title="See More"
              id="basic-nav-dropdown"
            >
              <LinkContainer to="/about">
                <NavDropdown.Item className="dropdown">About</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/blog">
                <NavDropdown.Item>Blog</NavDropdown.Item>
              </LinkContainer>

              <NavDropdown.Divider />
              <LinkContainer to="/merchandise">
                <NavDropdown.Item>Merchandise</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <LinkContainer to="/cart">
              <Nav.Link
                to="/cart"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="nav-link"
              >
                <i className="fas  fa-shopping-cart fa-xs"></i>
                Cart
              </Nav.Link>
            </LinkContainer>

            {userInfo ? (
              <NavDropdown title={userInfo.name} id="username">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link
                  to="/login"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="nav-link"
                >
                  <div>
                    <i className="fas fa-user"></i>
                    Login
                  </div>
                </Nav.Link>
              </LinkContainer>
            )}

            {userInfo && userInfo.isAdmin && (
              <NavDropdown title="Admin" id="adminmenu">
                <LinkContainer to="/admin/userlist">
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/admin/productlist">
                  <NavDropdown.Item>Products</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/admin/orderlist">
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
