
import Nav from 'react-bootstrap/Nav';
import React, { useState } from 'react';

import {
    Badge,
    Container,
    FormControl,
    NaV,
    Navbar,
    Dropdown,
} from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa'
function MenuNavbar() {
  // const state=useState(0);
  return (
    <Navbar bg="white" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#A1">BreakFast</Nav.Link>
            <Nav.Link href="#A2">Lunch</Nav.Link>
            <Nav.Link href="#A3">Snacks</Nav.Link>
            <Nav.Link href="#A4">Dinner</Nav.Link>
          </Nav>
         
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
           <Nav>
         <Dropdown alignRight>
            <Dropdown.Toggle variant='success'>
            <FaShoppingCart color='white' fontSize='25px'/>
            <Badge>10</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{minWidth:370 }}>
                <span style={{padding:10}}>Cart is Empty!</span>
            </Dropdown.Menu>
         </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuNavbar;