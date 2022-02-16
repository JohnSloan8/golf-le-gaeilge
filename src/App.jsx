import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

export default function App() {
  return (
    <>
      <Navbar fixed="top" bg="light" expand="sm">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img
              alt=""
              src="/src/images/Golf.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <Nav.Link as={Link} to="/courses">
                  Cúrsaí
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/players">
                  Imreoirí
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Container fluid style={{height: '100%', padding: '0', bottom: '0', border: '1px dashed black'}}> */}
      <Container
        style={{
          maxWidth: '767px',
          bottom: '-90px',
          height: '100%',
          padding: '0',
          marginTop: '90px',
          overflowY: 'scroll',
          backgroundColor: '#eeeeee',
        }}
      >
        <Outlet />
      </Container>
      {/* </Container> */}
    </>
  );
}
